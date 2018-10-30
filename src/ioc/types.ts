"use strict"

const TYPES = {
  Server: "Server",
  Application: "Application",
  GetUserController: "GetUserController",
  FailResponder404: "FailResponder404",
  FinishResponder200: "FinishResponder200",
  UserAuthorise: "UserAuthorise",
  UserValidate: "UserValidate",
  User: "User",  
  Pipeline: "Pipeline",
  FailHandler: "PipelineFailHandler",
  FinishHandler: "PipelineFinishHandler",
  NextHandler: "PipelineNextHandler",
  PipelineFactory: "PipelineFactory",
  PipelineFailHandlerFactory: "PipelineFailHandlerFactory",
  PipelineFinishHandlerFactory: "PipelineFinishHandlerFactory",
  PipelineNextHandlerFactory: "PipelineNextHandlerFactory",
  GetUserPipeline: "GetUserPipeline"
}

export default TYPES
