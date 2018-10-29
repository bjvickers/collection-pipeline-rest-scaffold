# Containerized Nodejs REST Scaffold

## Install
```
$ mkdir -vp scaffold  
$ cd scaffold  
$ git clone https://github.com/bjvickers/collection-pipeline-rest-scaffold.git .  
$ npm install  
$ npm run build  
$ npm run qc   
```


## Develop and Staging
### Run
```
$ npm run start:basic  
```
This will run the app whilst monitoring any changes to the Typescript files.
Changes will be automatically transpiled and the application will automatically reload.


### Debug
```
$ npm run start:debug   
```
Note that this is configured for remote debugging (for local debugging,
change the IP address from 0.0.0.0 to 127.0.0.1. 

As with `start:basic`, auto-compilation and reload will occur on any changes
made to the Typescript files.


### Test
```
$ npm test   
```


## Production
### Run
```
$ npm start   
```
The scaffold uses pm2 to ensure continuous operation in the event of shutdown, 
and clustering, to maximise performance.
