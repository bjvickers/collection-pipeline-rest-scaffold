# NodeJS Collection Pipeline REST Scaffold

## Install
```
$ mkdir -vp scaffold  
$ cd scaffold  
$ git clone https://github.com/bjvickers/collection-pipeline-rest-scaffold.git .  
$ npm install  
$ npm run build && npm run qc  
```


## Local
### Run
```
$ npm run start:reload  
```
This will run the app whilst monitoring any changes to the Typescript files.
Changes will be automatically transpiled and the application will automatically reload.


### Debug
```
$ npm run start:reload:debug  
```
Note that this is configured for remote debugging (for local debugging,
change the IP address from 0.0.0.0 to 127.0.0.1).

As with `start:reload`, auto-compilation and reload will occur on any changes
made to the Typescript files.


### Test
```
$ npm run qc:test  
```


## Staging & Production
### Run
```
$ npm start   
```
The scaffold uses pm2 to ensure continuous operation in the event of shutdown, 
and clustering, to maximise performance.
