"use strict"

import * as awilix from "awilix"
import UserAuthorise from "../components/user-authorise"
import UserValidate from "../components/user-validate"
import IComponentConfig from "../config/i-component-config"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.UserAuthorise]: awilix.asValue({
      create: (config: IComponentConfig) => new UserAuthorise(config)
    }),
    [TYPES.UserValidate]: awilix.asValue({
      create: (config: IComponentConfig) => new UserValidate(config)
    })
  }
}
