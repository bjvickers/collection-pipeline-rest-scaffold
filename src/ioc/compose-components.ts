"use strict"

import * as awilix from "awilix"
import ComponentConfig from "../config/component-config"
import UserAuthorise from "../components/user-authorise"
import UserValidate from "../components/user-validate"
import TYPES from "./types"

export default function () {
  return {
    [TYPES.UserAuthorise]: awilix.asValue({
      create: (config: ComponentConfig) => new UserAuthorise(config)
    }),
    [TYPES.UserValidate]: awilix.asValue({
      create: (config: ComponentConfig) => new UserValidate(config)
    })
  }
}
