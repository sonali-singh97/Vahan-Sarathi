from fastapi import FastAPI, Request
from sse_starlette.sse import EventSourceResponse
from datetime import datetime 
from fastapi.middleware.cors import CORSMiddleware
import time 
import os
import uvicorn
import json

import logging
import grpc
import base64
import gzip

from cassandra.auth import PlainTextAuthProvider
import config as cfg
from cassandra.query import BatchStatement, SimpleStatement
from cassandra.cluster import Cluster
from cassandra.policies import *
from ssl import PROTOCOL_TLSv1_2, SSLContext, CERT_NONE
from requests.utils import DEFAULT_CA_BUNDLE_PATH

# import argparse
import pravega.grpc_gateway as pravega


app = FastAPI(
    title="Vahan Saarthi Backend",
    description="A project made in Unbounded by Dell Technologies",
    version="0.1.0",
    openapi_url="/api/v0.1.0/openapi.json",
    docs_url="/",
    redoc_url=None
)

#add CORS so our web page can connect to our api
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost", "http://localhost:3000", "http://localhost:8000","http://localtest.me:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ssl_context = SSLContext(PROTOCOL_TLSv1_2)
ssl_context.verify_mode = CERT_NONE
auth_provider = PlainTextAuthProvider(username=cfg.config['username'], password=cfg.config['password'])
cluster = Cluster([cfg.config['contactPoint']], port = cfg.config['port'], auth_provider=auth_provider,ssl_context=ssl_context)


def decode_stream_cut_text(text):
    """Based on StreamCutImpl.java"""
    plaintext = gzip.decompress(base64.b64decode(text)).decode('utf-8')
    split = plaintext.split(':', 5)
    stream = split[1]
    segment_numbers = [int(s) for s in split[2].split(',')]
    epochs = [int(s) for s in split[3].split(',')]
    offsets = [int(s) for s in split[4].split(',')]
    zipped = list(zip(zip(segment_numbers, epochs), offsets))
    positions = dict(zipped)
    return {
        'plaintext': plaintext,
        'stream': stream,
        'positions': positions,   # map from (segment_number, epoch) to offset
    }


def encode_stream_cut_text(stream_cut):
    """Based on StreamCutImpl.java"""
    zipped = list(stream_cut['positions'].items())
    segment_numbers = [str(z[0][0]) for z in zipped]
    epochs = [str(z[0][1]) for z in zipped]
    offsets = [str(z[1]) for z in zipped]
    split = [
        str(0),
        stream_cut['stream'],
        ','.join(segment_numbers),
        ','.join(epochs),
        ','.join(offsets),
    ]
    plaintext = ':'.join(split)
    text = base64.b64encode(gzip.compress(plaintext.encode('utf-8')))
    return text

async def stream_getter(request):
    parser = argparse.ArgumentParser()
    parser.add_argument('--from_head_streamcut', action='store_true')
    parser.add_argument('--gateway', default='127.0.0.1:54672')
    parser.add_argument('--scope', default='testroute1')
    parser.add_argument('--stream', default='testbus11')
    parser.add_argument('--to_tail_streamcut', action='store_true')
    args = parser.parse_args()

    with grpc.insecure_channel(args.gateway) as pravega_channel:
        pravega_client = pravega.grpc.PravegaGatewayStub(pravega_channel)

        stream_info = pravega_client.GetStreamInfo(pravega.pb.GetStreamInfoRequest(scope=args.scope, stream=args.stream))

        if args.from_head_streamcut:
            decoded = decode_stream_cut_text(stream_info.tail_stream_cut.text)

            encoded = encode_stream_cut_text(decoded)

            from_stream_cut_decoded = decode_stream_cut_text(stream_info.head_stream_cut.text)

            from_stream_cut_encoded = encode_stream_cut_text(from_stream_cut_decoded)
            from_stream_cut = pravega.pb.StreamCut(text=from_stream_cut_encoded)
        else:
            from_stream_cut = None

        if args.to_tail_streamcut:
            to_stream_cut = stream_info.tail_stream_cut
        else:
            to_stream_cut = None

        read_events_request = pravega.pb.ReadEventsRequest(
            scope=args.scope,
            stream=args.stream,
            from_stream_cut=from_stream_cut,
            to_stream_cut=to_stream_cut,
        )
        for r in pravega_client.ReadEvents(read_events_request):
            if await request.is_disconnected():
                print("client disconnected!!!")
                break
            val = r.event
            val = val.decode('UTF-8')
            yield json.dumps(val)

            time.sleep(0.25)

@app.get('/stream')
async def runStatus(request: Request):
    event_generator = stream_getter(request)
    return EventSourceResponse(event_generator)

@app.get('/data/{route}/{bus}')
async def data(route: int, bus: int):
    with cluster.connect() as session:

        rows = session.execute('''SELECT * FROM VaahanData.bus1 where routeid = {} and busid = {} ORDER BY date_ '''.format(route, bus))

        result = []
        keys = ["id","Route","Bus Id","Date","Time","COUNT","MASK COUNT","NO MASK","MALE","FEMALE","AGE GRP 1","AGE GRP 2","AGE GRP 3","AGE GRP 4","Temperature","Humidity","Pressure","Velocity"]
        for r in rows:
            result.append({keys[i]: r[i] for i in range(len(keys))})
            id = r.id 
            id = id.split("_")
            result[-1]['Date'] = id[1]
            result[-1]['Time'] = id[2]

        return {
            'message' : result
        }


if __name__ == "__main__":
    import argparse
    uvicorn.run(app, host="0.0.0.0", port=8000, debug=True)
