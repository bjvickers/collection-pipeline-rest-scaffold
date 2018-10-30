"use strict"

import * as awilix from "awilix"
import Application from "../api/application/application"
import GetUserController from "../api/controllers/get-user-controller"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.Application]: awilix.asClass(Application),
    [TYPES.GetUserController]: awilix.asClass(GetUserController)
  }
}
