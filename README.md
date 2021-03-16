# Load Balancer

## Introduction

Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault-tolerant configurations. 



## Prerequisite before starting

```
Docker
```
```
Docker Compose
```


## To run

1. Clone the project.
```
git clone https://github.com/abhisawesome/Load-Balancer.git
```

2. Create a environment file describing the server details

```
data=[{"server":"xxx.xx.xx.xx:xxxx", "weight":2}]
port=8080
upstreamName=exampleStreamName
```
|name|description|required|
|----|-----|----|
|data|Array of object representing the server details|true|
|port|Port for starting. As default the port will be 8080.|optional|
|upstreamName|Name for the nginx config upstream|optional|


<br/><br/>


3. Pass the environment file to docker-compose.yml file

4. RUN the command
```
docker-compose up -d
```

5. Test where its running or not

```
docker ps
```