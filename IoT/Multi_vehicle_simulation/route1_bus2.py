#!/usr/bin/env python

import datetime
import time
import grpc
import random
import argparse
import pravega.grpc_gateway as pravega
import json
from cassandra.auth import PlainTextAuthProvider
import config as cfg
from cassandra.query import BatchStatement, SimpleStatement
from prettytable import PrettyTable
import time
import ssl
import cassandra
from cassandra.cluster import Cluster
from cassandra.policies import *
from ssl import PROTOCOL_TLSv1_2, SSLContext, CERT_NONE
from requests.utils import DEFAULT_CA_BUNDLE_PATH

#<authenticateAndConnect>
ssl_context = SSLContext(PROTOCOL_TLSv1_2)
ssl_context.verify_mode = CERT_NONE
auth_provider = PlainTextAuthProvider(username=cfg.config['username'], password=cfg.config['password'])
cluster = Cluster([cfg.config['contactPoint']], port = cfg.config['port'], auth_provider=auth_provider,ssl_context=ssl_context)
session = cluster.connect()
#</authenticateAndConnect>

#<createKeyspace>
print ("\nCreating Keyspace")
session.execute('CREATE KEYSPACE IF NOT EXISTS VaahanData WITH replication = {\'class\': \'NetworkTopologyStrategy\', \'datacenter\' : \'1\' }')
#</createKeyspace>

#<createTable>
print ("\nCreating Table")
session.execute('CREATE TABLE IF NOT EXISTS VaahanData.bus (id varchar PRIMARY KEY, routeid int, busid int, date_ date, time_ time, totalcount bigint, totalmask bigint, totalnomask bigint, totalmale bigint, totalfemale bigint, age1 bigint, age2 bigint, age3 bigint, age4 bigint, avgtemp decimal, avghumid decimal, avgpressure decimal, avgvelocity decimal )')
#</createTable>

stops={(76.584432, 29.9844213, 0.0):0, (76.5851455, 29.9841564, 0.0):1, (76.5846198, 29.9816055, 0.0):2, (76.6092317, 29.9763965, 0.0):3, (76.6597753, 29.9676973, 0.0):4, (76.7135053, 29.9586301, 0.0):5,(76.7297058, 29.956864, 0.0):6,(76.7731811, 29.9599751, 0.0):7,(76.8101527, 29.9629588, 0.0):8,(76.8140795, 29.964353, 0.0):9,(76.8281557, 29.9669183, 0.0):10,(76.8347754, 29.9688237, 0.0):11,(76.8375434, 29.9727273, 0.0):12,(76.8565871, 29.9734615, 0.0):13,(76.8655028, 29.9741028, 0.0):14,(76.8923034, 29.9789633, 0.0):15}
keys = list(stops.keys())

tempi=[]#AVG TEMP
humidi=[]#AVG HUMIDITY
pressure=[]#AVG PRESSURE
velocity=[]#AVG VELOCITY
tcount=0#TOTAL COUNT
tcountmask=0#TOTAL MASK WEARER
tcountnomask=0
tcountmale=0 #TOTAL MALE
tcountfemale=0 #TOTAL FEMALE
tage1=0 #AGE1 grp
tage2=0 #AGE2 grp
tage3=0 #age3 grp
tage4=0 #age4 grp


def events_to_write_generator(args,event):
    # while True:
    event_to_write = pravega.pb.WriteEventsRequest(
        scope=args.scope,
        stream=args.stream,
        use_transaction=args.use_transaction,
        event=event.encode('UTF-8'),
        routing_key=str(random.randint(0, 10)),
    )
    # logging.info("event_to_write=%s", event_to_write)
    yield event_to_write

    time.sleep(1)

def datastopgen(loc,req_data):
    print("REACHED -",stops[loc])
    tcount =req_data["count"]
    tcountmask =req_data["countmask"]
    req_data["count"] = random.randint(10,53)

    if tcount< req_data["count"]:
        tcount = req_data["count"]

    req_data["countmask"] = random.randint(5,req_data["count"])

    if tcountmask< req_data["countmask"]:
            tcountmask = req_data["countmask"]

    tcountnomask =tcount-tcountmask

    req_data["nomask"] = req_data["count"]-req_data["countmask"]

    tcountmale =req_data["countmale"]

    req_data["countmale"] = random.randint(1,req_data["count"])
    if tcountmale< req_data["countmale"]:
                    tcountmale = req_data["countmale"]

    req_data["countfemale"] = req_data["count"] -req_data["countmale"]

    tcountfemale = tcount - tcountmale
    a,b,c,d = random.random(),random.random(),random.random(),random.random()
    s = a+b+c+d
    tage1,tage2,tage3,tage4 = req_data["age1"],req_data["age2"],req_data["age3"],req_data["age4"]
    req_data["age1"] = int((a*req_data["count"])//s)
    req_data["age2"]  = int((b*req_data["count"])//s)
    req_data["age3"]  = int((c*req_data["count"])//s)
    req_data["age4"]  = int(req_data["count"]-(req_data["age1"]+req_data["age2"]+req_data["age3"]))

    if tage1<req_data["age1"] or tage2< req_data["age2"] or tage3< req_data["age3"]or tage4<req_data["age4"]:
        tage1,tage2,tage3 = req_data["age1"],req_data["age2"],req_data["age3"]
        tage4 = tcount -(tage1+tage2+tage3+tage4)


    index = keys.index(loc)

    if index==0:
        req_data["nextstop"],req_data["currentstop"],req_data["laststop"] = 1,None,0
    elif index == len(keys)-1:
        req_data["nextstop"],req_data["currentstop"],req_data["laststop"] = None,15,14

    else:
        req_data["nextstop"],req_data["currentstop"],req_data["laststop"] = stops[keys[index-1]],stops[keys[index]],stops[keys[index+1]]

    time.sleep(2.5)
    return req_data

def main():
    req_data = {'vtype':0,
            "vechn":1,
            "routen":1,
            'altitude':0,
            'lat':0,
            'lon':0,
            'time':0,
            'date':0,
            'count':0,
            'countmask':0,
            'nomask':0,
            'countmale':0,
            'countfemale':0,
            'isstop':0,
            'laststop':0,
            'currentstop':0,
            'nextstop':0,
            'tempi':0,
            'humidi':0,
            'pressurei':0,
            'velocity':0,
            'age1':0,
            'age2':0,
            'age3':0,
            'age4':0
            }


    parser = argparse.ArgumentParser()
    parser.add_argument('--gateway', default='20.197.27.68:54672')
    parser.add_argument('--min_num_segments', default=3)
    parser.add_argument('--no_create_scope', dest='create_scope', action='store_false')
    parser.add_argument('--scope', default='route1')
    parser.add_argument('--stream', default='bus2')
    parser.add_argument('--use_transaction', action='store_true')
    args = parser.parse_args()

    # SCOPE AND STREAM
    with grpc.insecure_channel(args.gateway) as pravega_channel:
        pravega_client = pravega.grpc.PravegaGatewayStub(pravega_channel)

        if args.create_scope:
            request = pravega.pb.CreateScopeRequest(scope=args.scope)
            # logging.info('CreateScope request=%s' % request)
            response = pravega_client.CreateScope(request)
            # logging.info('CreateScope response=%s' % response)

        request = pravega.pb.CreateStreamRequest(
            scope=args.scope,
            stream=args.stream,
            scaling_policy=pravega.pb.ScalingPolicy(min_num_segments=args.min_num_segments),
            retention_policy=pravega.pb.RetentionPolicy(retention_type='TIME', retention_param=2*24*60*60*1000),
        )
        # logging.info('CreateStream request=%s' % request)
        response = pravega_client.CreateStream(request)
        # logging.info('CreateStream response=%s' % response)

        time.sleep(60) #1 minute delay
        file = open("./coords.txt","r")
        lines = file.readlines()
        for line in lines:
            line = line.replace(" ","")
            loc = list(map(float,line.split(",")))
            #print(coord)

            req_data['currentstop']=15
            req_data['altitude'] = random.randint(241,274)

            req_data["lat"] = loc[1] #latitude
            req_data['lon'] =loc[0] #longitude

            if tuple(loc) in keys: #If stop comes
                req_data["isstop"]= True
                req_data = datastopgen(tuple(loc),req_data)
                req_data["velocity"] = 0
            else:
                req_data["isstop"] = False
                req_data["laststop"] = req_data["currentstop"]
                req_data["currentstop"]=None
                req_data["velocity"] = (round(random.triangular(40,30,50),1))


            now = datetime.datetime.now()
            req_data["time"] = now.strftime("%H:%M:%S")
            req_data["date"] = now.strftime("%d/%m/%Y")

            req_data["tempi"] = (round(random.triangular(26,38),2))
            req_data["humidi"] =(int(random.triangular(25,70)))
            req_data["pressurei"] = (int(random.triangular(995,1005)))

            tempi.append(req_data["tempi"])
            humidi.append(req_data["humidi"])
            pressure.append(req_data["pressurei"])
            velocity.append(req_data["velocity"])

            # values = req_data.values()
            # final_output=",".join(list(map(str,values)))
            final_output = json.dumps(req_data)

            write_response = pravega_client.WriteEvents(events_to_write_generator(args,final_output))
            #print(final_output)
            time.sleep(0.15)

    print("-------WRITING TO CASSANDRA DB-----------")

    now1 = datetime.datetime.now()
    time_ = str(now1.strftime("%H:%M:%S"))
    date_ = str(now1.strftime("%Y-%m-%d"))

    idx =str(req_data['vtype'])+str(req_data['vechn'])+str(req_data['routen'])+"_"+date_+"_"+time_
    routeid =1
    busid = 1
    tempx = round((sum(tempi)/len(tempi)),2)
    humidx = round((sum(humidi)/len(humidi)),2)
    pressx = round((sum(pressure)/len(pressure)),2)
    velocityx = round((sum(velocity)/len(velocity)),2)
    #<insertData>
    session.execute("INSERT INTO  VaahanData.bus  (id,routeid,busid,date_,time_,totalcount,totalmask,totalnomask,totalmale,totalfemale,age1,age2,age3,age4,avgtemp,avghumid,avgpressure,avgvelocity) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)" , [idx,routeid,busid,date_,time_,tcount,tcountmask,tcountnomask,tcountmale,tcountfemale,tage1,tage2,tage3,tage4,tempx,humidx,pressx,velocityx])
    #</insertData>




if __name__ == '__main__':
    main()
