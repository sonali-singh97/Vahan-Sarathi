# Backend Code


## Developing & Executing
1. Clone this repo. 
    ``` bash
    git clone https://github.com/sonali-singh97/Vahan-Sarathi.git
    ```

2. Navigate to `backend` subfolder in cloned repository.
    ``` bash 
    cd Vahan-Sarathi/backend
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
         
9. In `main.py` replace `127.0.0.1:54672` with your pravega-grpc-getway IP address and port. 
    
10. Run `python main.py`. 

11. Backend is working on `http://localhost:8000`

