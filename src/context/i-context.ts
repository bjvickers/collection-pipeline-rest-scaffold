"use strict"

import IApi from "./i-api"
import IDbQuery from "./i-db-query"
import IEmailTemplate from "./i-email-template"
import IModels from "./i-models"

export default interface IContext {
  pipeline: string
  api: IApi
  models: IModels
  db: IDbQuery
  email: IEmailTemplate[]
}
