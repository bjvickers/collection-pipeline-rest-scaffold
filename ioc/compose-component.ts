"use strict"

import { awilix } from "awilix"
import AbstractComponentConfig from "../config/AbstractComponentConfig"
import UserAuthorise from "../components/UserAuthorise"
import UserValidate from "../components/UserValidate"
import TYPES from "./TYPES"

export default function () {
  return {
    TYPES.UserAuthorise: awilix.asFunction((config: AbstractComponentConfig) => {
      return new UserAuthorise(config)
    }),
    TYPES.UserValidate: awilix.asFunction((config: AbstractComponentConfig) => {
      return new UserValidate(config)
    })
  }
}
