"use strict"

import * as awilix from "awilix"
import fs from "fs"
import TYPES from "./types"

const raw = fs.readFileSync("./pipelines/registration-pipeline.json", "utf8")
const registrationPipeline = JSON.parse(raw)

export default function() {
  return {
    [TYPES.RegistrationPipeline]: awilix.asValue(registrationPipeline)
  }
}
