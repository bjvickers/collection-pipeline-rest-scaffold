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
  FailHandler: "FailHandler",
  FailHandlerFactory: "FailHandlerFactory",
  FailResponder400: "FailResponder400",
  FailResponder401: "FailResponder401",
  FailResponder404: "FailResponder404",
  FailResponder409: "FailResponder409",
  FailResponder500: "FailResponder500",
  FinishHandler: "FinishHandler",
  FinishHandlerFactory: "FinishHandlerFactory",
  FinishResponder200: "FinishResponder200",
  FinishResponder201: "FinishResponder201",
  IPipeline: "IPipeline",
  IPipelineBuildDirector: "IPipelineBuildDirector",
  IPipelineBuilder: "IPipelineBuilder",
  NextHandler: "NextHandler",
  NextHandlerFactory: "NextHandlerFactory",
  PipelineFactory: "PipelineFactory",
  RegistrationController: "RegistrationController",
  RegistrationPipeline: "RegistrationPipeline",
  RunDbQuery: "RunDbQuery",
  SaveNewUserToDb: "SaveNewUserToDb",
  SendEmails: "SendEmails",
  Server: "Server",
  TransformUserClearPassword: "TransformUserClearPassword",
  TransformViewModelToDomain: "TransformViewModelToDomain",
  User: "User"
}

export default TYPES
