"use strict"

// @TODO: Split out TYPES into modules, e.g:
// @TODO: COMPONENTS.<etc>, HANDLERS.<etc>, FACTORIES.<etc>
const TYPES = {
  AddContextEmails: "AddContextEmails",
  Application: "Application",
  BuildDbQueryFromContext: "BuildDbQueryFromContext",
  BuildEmailTemplates: "BuildEmailTemplates",
  ComponentFactory: "ComponentFactory",
  EnforceUniqueUserEmail: "EnforceUniqueUserEmail",
  IPipeline: "IPipeline",
  IPipelineBuildDirector: "IPipelineBuildDirector",
  IPipelineBuilder: "IPipelineBuilder",
  NextHandler: "NextHandler",
  NextHandlerFactory: "NextHandlerFactory",
  PipelineFactory: "PipelineFactory",
  RegistrationController: "RegistrationController",
  RegistrationPipeline: "RegistrationPipeline",
  Responder200: "Responder200",
  Responder201: "Responder201",
  Responder400: "Responder400",
  Responder401: "Responder401",
  Responder404: "Responder404",
  Responder409: "Responder409",
  Responder500: "Responder500",
  ResponseHandler: "ResponseHandler",
  ResponseHandlerFactory: "ResponseHandlerFactory",
  RunDbQuery: "RunDbQuery",
  SaveNewUserToDb: "SaveNewUserToDb",
  SendEmails: "SendEmails",
  Server: "Server",
  TransformUserClearPassword: "TransformUserClearPassword",
  TransformViewModelToDomain: "TransformViewModelToDomain",
  User: "User"
}

export default TYPES
