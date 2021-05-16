# IoT/Edge Device Code

<img src="Images/RPI_prototype.png" alt="Raspberry Pi Node Prototype" width="1000"/>

## Contents of the IoT Edge Node

1. Compute Units
   * Raspberry Pi 4
   
2. Sensors
   * PIR, Proximity and Ultrasonic Sensors (Detecting and Counting passengers Entering or Exiting the Vehicle)
   * Gyroscope and Accelerometer (Detecting Velocity of Vehicle in 3-D)
   * GPS and Barometer (Detecting Location and Altitude of the Vehicle)
   * DHT-11 (Detecting the vehicle's environmental Temperature and Humidity)
   * USB Camera (Detecting the age, gender and mask of passengers Entering or Exiting the Vehicle)

## Developing & Executing the Simulation Code - Real-Time Data

1. Clone this repo. 
    ``` bash
    git clone https://github.com/sonali-singh97/Vahan-Sarathi.git
    ```

2. Navigate to `IoT` subfolder in cloned repository.
    ``` bash 
    cd Vahan-Sarathi/IoT
    ```

3. Create a Virtual Environment.
    ``` bash 
    python3 -m venv venv
    ```

4. Activate that Virtual Environment.  
    ```bash
    source venv/bin/activate
    ```

5. Install the pravega-grpc-gateway client. 
    ``` bash 
    git clone https://github.com/pravega/pravega-grpc-gateway /tmp/pravega-grpc-gateway && \
    cd /tmp/pravega-grpc-gateway && \
    pip install grpcio pravega-grpc-gateway/src/main/python
    ```

6. Install all other requirements. 
    ``` bash 
    pip install -r requirements.txt
    ```

7. Create a Apache Cassandra Cluster for some result saving. 

    7.1 For Microsoft Azure, Use Cosmos. Refer [this](https://docs.microsoft.com/en-us/azure/managed-instance-apache-cassandra/create-cluster-portal)

    7.2 For Amazon Web Services, Refer [this](https://aws.amazon.com/quickstart/architecture/datastax-oss/)  

    7.3 You can any hosting service as you like, just follow the basic procedure of documentation. 

    7.4 For localhost & docker cluster running on local machine, Please remove 

8. Create a `config.py` file with following contents. 
    ``` python3 
    config = {
         'username': "username,
         'password': 'pass123',
         'contactPoint': 'demo-cassandra.com',
         'connectionString': 
         'port':'9071'
         }
         
9. In `main.py` replace `20.197.27.68:54672` with your pravega-grpc-getway IP address and port. 
    
10. Run `python main.py`. 

11. Multiple Vehicles can be simulated by running the following commands

    1. Navigate to `Multi_vehicle_simulation`
        ```bash
        cd ./Multi_vehicle_simulation
        ```
    2. Run different python files like `route1_bus1.py` or `route1_bus2.py` to simulate different buses running on different path.

    1. Navigate back to `IoT`
       ```bash
       cd ../
       ```


## Developing & Executing the Simulation Code - Historic Data on Cassandra


1. Navigate to `Data_Fabrication`
   ```bash
   cd ./Data_Fabrication
   ```

2. Create a `config.py` file with following contents. 
    ``` python3 
    config = {
         'username': "username,
         'password': 'pass123',
         'contactPoint': 'demo-cassandra.com',
         'connectionString': 
         'port':'9071'
         }

3. Run `cassandra_datagen.py` to populate the Casandra database.
    
4. Make edits to `cassandra_datagen.py` based on data needs and amount
