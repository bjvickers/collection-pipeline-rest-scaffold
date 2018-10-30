"use strict"

import * as awilix from "awilix"
import IPipelineConfig from "../config/i-pipeline-config"
import Pipeline from "../pipeline/pipeline"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.IPipeline]: awilix.asValue({
      create: (config: IPipelineConfig) => new Pipeline(config)
    })
  }
}
