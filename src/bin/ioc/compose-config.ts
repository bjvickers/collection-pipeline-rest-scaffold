"use strict"

import * as awilix from "awilix"
import fs from "fs"
import TYPES from "./types"

let raw = fs.readFileSync("./pipelines/registration-pipeline.json", "utf8")
const registrationPipeline = JSON.parse(raw)

raw = fs.readFileSync("./pipelines/hello-world-pipeline.json", "utf8")
const helloWorldPipeline = JSON.parse(raw)

export default function() {
  return {
    [TYPES.RegistrationPipeline]: awilix.asValue(registrationPipeline),
    [TYPES.HelloWorldPipeline]: awilix.asValue(helloWorldPipeline)
  }
}
