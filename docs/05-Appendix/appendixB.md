---
sidebar_position: 52
slug: /appendixb
sidebar_label: 'Appendix B'
---
# Azure AppDev Challenge

## Appendix B – IOT Simulator

The IOT Simulator is a containerised .NET console app that will generate simulated alarm events and publish those events to an Azure Event Grid Topic (that you need to create - refer to Appendix G for help).

The IOT Simulator will by default generate an alarm event for one of 10 devices (with static latitude and longitude) every 30 seconds for 60 minutes, after which it will stop.

Each alarm event includes a randomly selected image. There are 15 images in this URL location below - but you could substitute your own location and images (name each image photoXX.png where XX is 01, 02, 03 etc.):

[https://thingzstorage2.blob.core.windows.net/iotphotolibrary/](<https://thingzstorage2.blob.core.windows.net/iotphotolibrary/>)

e.g. [https://thingzstorage2.blob.core.windows.net/iotphotolibrary/photo01.png](<https://thingzstorage2.blob.core.windows.net/iotphotolibrary/photo01.png>)

The intent is for you to determine the status of the alarm (is it a false positive or not) by for example using the vision cognitive services and analysing the images to determine the threat they represent.

### Running the IOT Simulator container

The container image can be found here: [https://hub.docker.com/r/markharrison/alarmsiotsimulator](<https://hub.docker.com/r/markharrison/alarmsiotsimulator>)  

The IOT Simulator source code is here if of interest: [https://github.com/markharrison/ThingsSimulator](<https://github.com/markharrison/ThingsSimulator>)

#### Using Docker CLI locally

```bash
docker run -e AlarmTopicEndpoint="YOURENDPOINT" 
    -e AlarmKey="YOURKEY" 
    -e AlarmImageRoot="imagerooturl" 
    markharrison/alarmsiotsimulator
```

for example:

```bash
docker run -e AlarmTopicEndpoint='https://thingseventgrid.northeurope-1.eventgrid.azure.net/api/events' 
    -e  AlarmKey='tDjRnrwV0taI7DmSAsSnmb8SamZfbyEkPAlznUpyp00='  
    -e AlarmImageRoot='https://thingsstorage.blob.core.windows.net/iotphotos/' 
    -e AlarmImageNumber='15'  
    markharrison/alarmsiotsimulator
```

#### Using Azure Container Instance

```bash
az container create --resource-group YOURRG --name YOURNAME 
    --image markharrison/alarmsiotsimulator --restart-policy Never 
    --environment-variables AlarmTopicEndpoint=YOURENDPOINT AlarmKey=YOURKEY AlarmImageRoot=imageurl
```

#### Other parameter options

The readme in the GitHub repository includes more information on the required and optional parameters.

For example you can change the number of devices, the interval between alarms, how long the simulator runs for, the map area that the devices are located within and more.

Some examples of locations to override the default latitude and longitude:

| Param        | Reading   | London    | Edinburgh | Belfast   | Nottingham | Cardiff   |
|--------------|-----------|-----------|-----------|-----------|------------|-----------|
| AlarmMaxLat  | 51.470182 | 51.662326 | 55.974744 | 54.628046 | 52.981431  | 51.507668 |
| AlarmMinLat  | 51.422680 | 51.314297 | 55.907447 | 54.569176 | 52.915856  | 51.462985 |
| AlarmMaxLong | -1.028539 | -0.492208 | -3.302623 | -5.966994 | -1.194147  | -3.241660 |
| AlarmMinLong | -0.904084 | 0.158732  | -3.127528 | -5.866400 | -1.083940  | -3.142783 |

Here is an example using all the parameters to run the IOT Simulator (with docker CLI) for 20 devices, every 5 secs, for the area of Reading, with 10 images and running for 60 minutes:

```bash
docker run -e AlarmTopicEndpoint='https://*myalarms.northeurope-1*.eventgrid.azure.net/api/events' 
        -e AlarmKey=*'Abcdefghijklmnopqrstuvwxyz=*' 
        -e AlarmImageRoot=’<https://alarmimages.blob.core.windows.net/alarmimages/>’ 
        -e AlarmImageNumber='10' 
        -e AlarmInterval='5000' 
        -e AlarmNumDevices='20' 
        -e AlarmMaxLat='51.470182' -e AlarmMinLat='51.422680' 
        -e AlarmMaxLong=-'-1.028539' -e AlarmMinLong='-0.904084' 
        -e AlarmMaxRunTime='60' 
        markharrison/alarmsiotsimulator
```
