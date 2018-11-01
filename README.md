# NodeJS Collection Pipeline REST Scaffold

## Install
```
$ mkdir -vp scaffold  
$ cd scaffold  
$ git clone https://github.com/bjvickers/collection-pipeline-rest-scaffold.git .  
$ npm install  
$ npm run build && npm run qc  
```

## Synopsis
Experimental application using a component (or task) pipeline architecture.
For every endpoint exposed by the API, an 'src/config/(endpoint)-pipeline.json'
should be created. This details the sequence of components (src/components) that are 
necessary to implement the endpoint.

Program flow is as follows:
* Client makes a request of the API endpoint
* Middlewares are executed in sequence, as normal
* The controller takes receipt of the request
* The controller transforms the request into a context object that will be
used by the pipeline components
* The controller then triggers the pipeline workflow

The components described by the pipeline.json are executed in the sequence
they are declarted. They are orthogonal, and do exactly one thing. 
They concern themselves with only the 'happy path' of execution, and 
delegate any errors to the failover management provided by aspects (src/aspect).

Individual component workflow is as follows:
* Receive the injected context object
* Extract any necessary inputs from the context (validation already assured)
* Execute business logic
* Write output to the context object

To get an idea of program operation, start the application (`npm run start:reload`),
then open a second tab and run the api tests (`npm run qc:test:api`). After
the test has run, refer to the application tab to see logging from each
of the components in the pipleline.


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
