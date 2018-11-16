# NodeJS Collection Pipeline REST Scaffold
[![Greenkeeper badge](https://badges.greenkeeper.io/bjvickers/collection-pipeline-rest-scaffold.svg)](https://greenkeeper.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbjvickers%2Fcollection-pipeline-rest-scaffold.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbjvickers%2Fcollection-pipeline-rest-scaffold?ref=badge_shield)
[![Known Vulnerabilities](https://snyk.io/test/github/bjvickers/collection-pipeline-rest-scaffold/badge.svg)](https://snyk.io/test/github/bjvickers/collection-pipeline-rest-scaffold)

---

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

---

## Implementing Endpoints (Pipelines)

### Write tests
Write the new pipeline feature test in `test/feature`

### Update OpenAPI Spec
Update the OpenAPI specification to define the new endpoint in `src/api/spec/api.yaml`

### Add new API endpoint
Create new `src/api/controllers` interface
Create new `src/api/controllers` controller
Create new `src/api/transformers` transformer
Add new controller to src/api/application/Application (@TODO: Refactor so that changes not necessary)
Add all new classes and interfaces to `src/bin/ioc/` and `src/bin/ioc/TYPES.ts`

### Create the new pipeline configuration
Create a new configuration file in `pipeline/`
Add configuration file loading to `src/bin/ioc/compose-config.ts`

### Implement any new component/task(s)
Create any new component/task(s) in `src/pipeline/components/`
Add the new component/task(s) to `src/bin/ioc/compose-components.ts` and `src/bin/ioc/TYPES.ts`

---

## Analysis
The codebase provides the following reports:

* Complexity report
* Flamegraph report
* Code coverage report
* TODO/FIXME reminders report

Reports can be generated using the following:

```console
npm run report   
```
---

## Build, Test, Debug, Run

### Dependencies
The following must be installed prior to building the application.
Note that the application *may* run on older versions of NodeJS.

* NodeJS >= 10
* Bzip2

### Install
```console
mkdir -vp project  
cd project  
git clone https://github.com/bjvickers/collection-pipeline-rest-scaffold.git .  
npm i  
npm run build && npm run qc  
```

### Test
```console
npm t  
```

### Debug
```console
npm run start:debug  
```
Auto-compilation and reload will occur on any changes made to the Typescript files.

Note that this is configured for remote debugging (for local debugging,
change the IP address from 0.0.0.0 to 127.0.0.1).

## Run (Reload Mode)
```console
npm run start:reload  
```
This will run the app whilst monitoring any changes to the Typescript files.
Changes will be automatically transpiled and the application will automatically reload.

## Run (Production Mode)
```console
npm start   
```
