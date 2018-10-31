"use strict"

import * as awilix from "awilix"
import Application from "../api/application/application"
import RegistrationController from "../api/controllers/registration-controller"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.Application]: awilix.asClass(Application),
    [TYPES.RegistrationController]: awilix.asClass(RegistrationController)
  }
}
