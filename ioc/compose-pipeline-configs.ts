"use strict"

import awilix = require("awilix")
import PipelineConfig from "../pipeline-config/PipelineConfig"
import getUserPipelineConfig from "../pipeline-config/data/get-user"
import TYPES from "./TYPES"

export default function () {
  return {
    TYPES.GetUserPipelineConfig: awilix.asValue(getUserPipelineConfig)
  }
}
