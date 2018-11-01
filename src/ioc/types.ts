"use strict"

// @TODO: Split out TYPES into modules, e.g:
// @TODO: COMPONENTS.<etc>, HANDLERS.<etc>, FACTORIES.<etc>
const TYPES = {
  AddContextEmails: "AddContextEmails",
  AssertDbUniqueUserEmail: "AssertDbUniqueUserEmail",
  Application: "Application",
  BuildDbQueryFromContext: "BuildDbQueryFromContext",
  BuildEmailTemplates: "BuildEmailTemplates",
  ComponentFactory: "ComponentFactory",
  IPipeline: "IPipeline",
  IPipelineBuildDirector: "IPipelineBuildDirector",
  IPipelineBuilder: "IPipelineBuilder",
  NextHandler: "NextHandler",
  NextHandlerFactory: "NextHandlerFactory",
  PersistNewDbModel: "PersistNewDbModel",
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
  SendEmails: "SendEmails",
  Server: "Server",
  TransformModelsDbToDomain: "TransformModelsDbToDomain",
  TransformModelsDomainToDb: "TransformModelsDomainToDb",
  TransformModelsDomainToView: "TransformModelsDomainToView",
  TransformModelsViewToDomain: "TransformModelsViewToDomain",
  TransformUserClearPassword: "TransformUserClearPassword",
  User: "User"
}

export default TYPES
