"use strict"

import * as awilix from "awilix"
import Pipeline from "../pipeline/pipeline"
import PipelineConfig from "../config/pipeline-config"
import TYPES from "./types"

export default function () {
  return {
    [TYPES.Pipeline]: awilix.asValue({
      create: (config: PipelineConfig) => new Pipeline(config)
    })
  }
}
