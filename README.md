# Vahan-Sarathi


<p align="center">
  <a href="https://github.com/sonali-singh97/Vahan-Sarathi/">
   <img src="https://madewithlove.now.sh/in?heart=true&colorA=%23ff0000&colorB=%23050505&template=plastic" alt="Made with love in India">
    <img alt="GitHub" src="https://img.shields.io/github/license/sonali-singh97/Vahan-Sarathi?style=plastic">
    <img src="https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8Fby%20-Unnamed-green">
  </a>
</p>

<p align="center">
  <a href="https://github.com/ankuraxz/tagonizer/">
    <img src ="https://img.shields.io/github/issues-raw/sonali-singh97/Vahan-Sarathi" alt = "Open Issues">
    <img src ="https://img.shields.io/github/issues-closed-raw/sonali-singh97/Vahan-Sarathi" alt = "Closed Issues">
    <img src ="https://img.shields.io/github/issues-pr-raw/sonali-singh97/Vahan-Sarathi" alt = "Open Pull Requests">
    <img src ="https://img.shields.io/github/issues-pr-closed/sonali-singh97/Vahan-Sarathi" alt = "Closed Pull Requests">
  </a>
 </p>




## PROBLEM STATEMENT
COVID-19  virus  is  on  a  rise throughout the world, especially in countries like India with a huge population and where people are much more dependent on public transports like Buses and local  trains.  This  project focuses  on  resolving  this issue, by keeping a check on the number of people travelling in a public vehicle and number of people wearing masks etc. This information is provided to other passengers, planning to travel in that vehicle.

## Introduction to Our Solution
Vahan Sarathi is a web-application that utilizes Pravega at its backbone to help public vehicle passengers,  in  making  their  daily  commute  much safer and more pleasant, specifically in the era of COVID-19.  Each  Vehicle  can  be  considered  as  a stream pushing data in Real-time while commuting on their  respective routes  (scopes). For this  purpose, vehicles can be fitted with IoT devices that sense the various changes in environment and push data. On the  web  application,  passengers  can  see  various vehicles on a single route, passengers traveling in a particular vehicle, number of people wearing masks, age group of people travelling and much more.

## PIPELINE OF THE PROJECT
![PIPELINE](https://raw.githubusercontent.com/sonali-singh97/Vahan-Sarathi/main/IoT/Images/sys_design.png)

## DEMO VIDEO LINK
[![Watch the video](https://img.youtube.com/vi/5B76veZCCGI/hqdefault.jpg)](https://youtu.be/5B76veZCCGI)

### SUBSECTIONS OF THE APPLICATION
* Head Over to [IoT and Data Simulation Section](IoT/)
* Head Over to [Backend and Data Processing Section](backend/)
* Head Over to [Web Frontend](web/)

## MORE ON PRAVEGA-GRPC-GATEWAY
[PRAVEGA-GRPC-GATEWAY](https://github.com/pravega/pravega-grpc-gateway)

Using a GRPC gateway is better than a REST gateway for the following reasons:

- GRPC streaming is used for reading and writing events. This allows the Pravega connection to remain open for the life
  of the streaming request. Within a streaming request, any number of read or write operations can be performed.
  In the case of writing, these can also be wrapped in transactions. 
  Events can be marked to commit the current transaction and open a new one.
  
- GRPC uses Protobuf for efficient serialization.
  REST/JSON requires base64 encoding of binary data which is less efficient.
  
- GRPC stubs (client code) can be easily created for nearly any language and environment.
