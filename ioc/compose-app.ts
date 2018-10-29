"use strict"

import awilix = require("awilix")
import Application from "../api/Application"
import GetUserController from "../api/controllers/GetUserController"
import FailResponder404 from "../api/responders/FailResponder404"
import FinishResponder200 from "../api/responders/FinishResponder200"
import TYPES from "./TYPES"

export default function () {
  return {
    TYPES.Application: awilix.asClass(Application),
    TYPES.GetUserController: awilix.asClass(GetUserController),
    TYPES.FailResponder404: awilix.asClass(FailResponder404),
    TYPES.FinishResponder200: awilix.asClass(FinishResponder200)
  }
}
