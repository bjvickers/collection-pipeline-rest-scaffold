# NodeJS Collection Pipeline REST Scaffold
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## Synopsis
Experimental application using a collection pipeline architecture to implement
endpoints in a RESTful application.

For every endpoint exposed by the API, a './pipelines/(endpoint)-pipeline.json'
should be created. This details the sequence of components/tasks (./src/pipeline/components)
that are necessary to implement the endpoint.

Pre-pipeline program flow is as follows:
* Client makes a request of the API endpoint
* Middlewares are executed in sequence
* The controller takes receipt of the request
* The controller transforms the request into a context object that will be
used by the pipeline components

Pipeline program flow then follows:
* The controller triggers the pipeline workflow
* The first/next component in the pipeline executes its task
* On completion, the despatcher (./src/pipeline/aspects/despatchable) triggers
the 'success handler' attached to the component, which will in turn
either call the next component in the pipeline, or send a 'success' response
to the client, indicating successful completion of the pipeline
* On error, the despatcher will trigger the 'fail handler' attached
to the component, which will send a fail response to the client.

The components described by the pipeline.json are executed in the sequence
they are declared. They are orthogonal, and do exactly one thing. 
They concern themselves with only the 'happy path' of execution, and 
delegate any errors to the failover management provided by the despatcher
(./src/pipeline/aspect/despatchable). The despatcher is an 'aspect', and is attached
to the component in the component constructor.

Individual component workflow is as follows:
* Receive the injected context object
* Extract any necessary inputs from the context (validation already assured)
* Execute business logic
* Write output to the context object

To get an idea of program operation, run the test: `npm run test:feature`


## Install
```
$ mkdir -vp project  
$ cd project  
$ git clone https://github.com/bjvickers/collection-pipeline-rest-scaffold.git .  
$ npm i  
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
$ npm run start:debug  
```
As with `start:reload`, auto-compilation and reload will occur on any changes
made to the Typescript files.

Note that this is configured for remote debugging (for local debugging,
change the IP address from 0.0.0.0 to 127.0.0.1).

### Test
```
$ npm t  
```


## Staging & Production
### Run
```
$ npm start   
```
