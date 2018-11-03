"use strict"

import * as awilix from "awilix"
import registrationPipeline from "../../pipeline/config/registration-pipeline.json"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.RegistrationPipeline]: awilix.asValue(registrationPipeline)
  }
}
