"use strict"

import * as awilix from "awilix"
import AddContextEmails from "../components/add-context-emails"
import BuildDbQueryFindUserByEmail from "../components/build-db-query-find-user-by-email"
import BuildEmailTemplates from "../components/build-email-templates"
import EnforceUniqueUserEmail from "../components/enforce-unique-user-email"
import FindDbUser from "../components/find-dbuser"
import SaveNewUserToDb from "../components/save-new-user-to-db"
import SendEmails from "../components/send-emails"
import TransformUserClearPassword from "../components/transform-user-clear-password"
import TransformViewModelToDomain from "../components/transform-view-model-to-domain"
import IComponentConfig from "../config/i-component-config"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.AddContextEmails]: awilix.asValue({
      create: (config: IComponentConfig) => new AddContextEmails(config)
    }),
    [TYPES.TransformViewModelToDomain]: awilix.asValue({
      create: (config: IComponentConfig) => new TransformViewModelToDomain(config)
    }),
    [TYPES.EnforceUniqueUserEmail]: awilix.asValue({
      create: (config: IComponentConfig) => new EnforceUniqueUserEmail(config)
    }),
    [TYPES.BuildDbQueryFindUserByEmail]: awilix.asValue({
      create: (config: IComponentConfig) => new BuildDbQueryFindUserByEmail(config)
    }),
    [TYPES.FindDbUser]: awilix.asValue({
      create: (config: IComponentConfig) => new FindDbUser(config)
    }),
    [TYPES.TransformUserClearPassword]: awilix.asValue({
      create: (config: IComponentConfig) => new TransformUserClearPassword(config)
    }),
    [TYPES.SaveNewUserToDb]: awilix.asValue({
      create: (config: IComponentConfig) => new SaveNewUserToDb(config)
    }),
    [TYPES.BuildEmailTemplates]: awilix.asValue({
      create: (config: IComponentConfig) => new BuildEmailTemplates(config)
    }),
    [TYPES.SendEmails]: awilix.asValue({
      create: (config: IComponentConfig) => new SendEmails(config)
    })
  }
}
