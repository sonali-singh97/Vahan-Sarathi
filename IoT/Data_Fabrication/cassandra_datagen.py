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

def PrintTable(rows):
    t = PrettyTable(["id","Route","Bus Id","Date","Time","COUNT","MASK COUNT","NO MASK","MALE","FEMALE","AGE GRP 1","AGE GRP 2","AGE GRP 3","AGE GRP 4","Temperature","Humidity","Pressure","Velocity"])
    for r in rows:
        t.add_row([r.id,r.routeid,r.busid,r.date_,r.time_,r.totalcount,r.totalmask,r.totalnomask,r.totalmale,r.totalfemale,r.age1,r.age2,r.age3,r.age4,r.avgtemp,r.avghumid,r.avgpressure,r.avgvelocity])
    print (t)

#<authenticateAndConnect>
ssl_context = SSLContext(PROTOCOL_TLSv1_2)
ssl_context.verify_mode = CERT_NONE
#OS PassKeys
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

#<insertData>
session.execute("INSERT INTO  VaahanData.bus  (id,routeid,busid,date_,time_,totalcount,totalmask,totalnomask,totalmale,totalfemale,age1,age2,age3,age4,avgtemp,avghumid,avgpressure,avgvelocity) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)" , ["011_2021-05-08_18:30:05",1,1,"2021-05-08","18:30:05",100,80,20,70,30,20,30,40,10,28.33,45,1000,45.3])
session.execute("INSERT INTO  VaahanData.bus  (id,routeid,busid,date_,time_,totalcount,totalmask,totalnomask,totalmale,totalfemale,age1,age2,age3,age4,avgtemp,avghumid,avgpressure,avgvelocity) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)" , ["011_2021-05-09_18:40:21",1,1,"2021-05-09","18:40:21",150,130,20,120,30,20,40,70,20,30.34,48,1001,53.6])
session.execute("INSERT INTO  VaahanData.bus  (id,routeid,busid,date_,time_,totalcount,totalmask,totalnomask,totalmale,totalfemale,age1,age2,age3,age4,avgtemp,avghumid,avgpressure,avgvelocity) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)" , ["011_2021-05-10_18:20:12",1,1,"2021-05-10","18:20:12",200,80,120,140,60,20,40,60,80,32.63,42,1002,52.5])
session.execute("INSERT INTO  VaahanData.bus  (id,routeid,busid,date_,time_,totalcount,totalmask,totalnomask,totalmale,totalfemale,age1,age2,age3,age4,avgtemp,avghumid,avgpressure,avgvelocity) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)" , ["011_2021-05-11_18:37:36",1,1,"2021-05-11","18:37:36",160,120,40,60,100,10,50,60,40,37.93,43,998,55.8])
session.execute("INSERT INTO  VaahanData.bus  (id,routeid,busid,date_,time_,totalcount,totalmask,totalnomask,totalmale,totalfemale,age1,age2,age3,age4,avgtemp,avghumid,avgpressure,avgvelocity) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)" , ["011_2021-05-12_18:28:14",1,1,"2021-05-12","18:28:14",180,80,100,140,40,10,60,70,40,40.38,37,1001,48.5])
session.execute("INSERT INTO  VaahanData.bus  (id,routeid,busid,date_,time_,totalcount,totalmask,totalnomask,totalmale,totalfemale,age1,age2,age3,age4,avgtemp,avghumid,avgpressure,avgvelocity) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)" , ["011_2021-05-13_18:35:15",1,1,"2021-05-13","18:35:15",250,170,80,100,150,30,80,100,40,35.53,70,1005,58.6])
session.execute("INSERT INTO  VaahanData.bus  (id,routeid,busid,date_,time_,totalcount,totalmask,totalnomask,totalmale,totalfemale,age1,age2,age3,age4,avgtemp,avghumid,avgpressure,avgvelocity) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)" , ["011_2021-05-14_18:30:00",1,1,"2021-05-14","18:30:00",270,200,70,150,120,10,50,110,100,32.30,80,1006,52.8])

# #</insertData>
# #011_13/05/2021_10:31:02,1,1,13/05/2021,10:31:02,26,11,15,15,11,8,4,10,4,28.33,45,1000,43.3


print ("\nSelecting All")
rows = session.execute('SELECT * FROM VaahanData.bus ORDER BY id')
PrintTable(rows)