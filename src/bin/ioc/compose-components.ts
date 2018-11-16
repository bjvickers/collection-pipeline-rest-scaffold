import * as awilix from "awilix"
import AddContextEmails from "../../pipeline/components/add-context-emails"
import AssertDbUniqueUserEmail from "../../pipeline/components/assert-db-unique-user-email"
import BuildDbQueryFromContext from "../../pipeline/components/build-db-query-from-context"
import BuildEmailTemplates from "../../pipeline/components/build-email-templates"
import HelloWorld from "../../pipeline/components/hello-world"
import PersistNewDbModel from "../../pipeline/components/persist-new-db-model"
import RunDbQuery from "../../pipeline/components/run-db-query"
import SendEmails from "../../pipeline/components/send-emails"
import TransformModelsDbToDomain from "../../pipeline/components/transform-models-db-to-domain"
import TransformModelsDomainToDb from "../../pipeline/components/transform-models-domain-to-db"
import TransformModelsDomainToView from "../../pipeline/components/transform-models-domain-to-view"
import TransformModelsViewToDomain from "../../pipeline/components/transform-models-view-to-domain"
import TransformUserClearPassword from "../../pipeline/components/transform-user-clear-password"
import IComponentConfig from "../../pipeline/schema/config/i-component-config"
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
    [TYPES.HelloWorld]: awilix.asValue({
      create: (config: IComponentConfig) => new HelloWorld(config)
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
