"use strict"

import * as awilix from "awilix"
import AddContextEmails from "../components/add-context-emails"
import AssertDbUniqueUserEmail from "../components/assert-db-unique-user-email"
import BuildDbQueryFromContext from "../components/build-db-query-from-context"
import BuildEmailTemplates from "../components/build-email-templates"
import PersistNewDbModel from "../components/persist-new-db-model"
import RunDbQuery from "../components/run-db-query"
import SendEmails from "../components/send-emails"
import TransformModelsDbToDomain from "../components/transform-models-db-to-domain"
import TransformModelsDomainToDb from "../components/transform-models-domain-to-db"
import TransformModelsDomainToView from "../components/transform-models-domain-to-view"
import TransformModelsViewToDomain from "../components/transform-models-view-to-domain"
import TransformUserClearPassword from "../components/transform-user-clear-password"
import IComponentConfig from "../config/i-component-config"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.AddContextEmails]: awilix.asValue({
      create: (config: IComponentConfig) => new AddContextEmails(config)
    }),
    [TYPES.AssertDbUniqueUserEmail]: awilix.asValue({
      create: (config: IComponentConfig) => new AssertDbUniqueUserEmail(config)
    }),
    [TYPES.BuildDbQueryFromContext]: awilix.asValue({
      create: (config: IComponentConfig) => new BuildDbQueryFromContext(config)
    }),
    [TYPES.RunDbQuery]: awilix.asValue({
      create: (config: IComponentConfig) => new RunDbQuery(config)
    }),
    [TYPES.TransformUserClearPassword]: awilix.asValue({
      create: (config: IComponentConfig) => new TransformUserClearPassword(config)
    }),
    [TYPES.PersistNewDbModel]: awilix.asValue({
      create: (config: IComponentConfig) => new PersistNewDbModel(config)
    }),
    [TYPES.BuildEmailTemplates]: awilix.asValue({
      create: (config: IComponentConfig) => new BuildEmailTemplates(config)
    }),
    [TYPES.SendEmails]: awilix.asValue({
      create: (config: IComponentConfig) => new SendEmails(config)
    }),
    [TYPES.TransformModelsDbToDomain]: awilix.asValue({
      create: (config: IComponentConfig) => new TransformModelsDbToDomain(config)
    }),
    [TYPES.TransformModelsDomainToDb]: awilix.asValue({
      create: (config: IComponentConfig) => new TransformModelsDomainToDb(config)
    }),
    [TYPES.TransformModelsDomainToView]: awilix.asValue({
      create: (config: IComponentConfig) => new TransformModelsDomainToView(config)
    }),
    [TYPES.TransformModelsViewToDomain]: awilix.asValue({
      create: (config: IComponentConfig) => new TransformModelsViewToDomain(config)
    })
  }
}
