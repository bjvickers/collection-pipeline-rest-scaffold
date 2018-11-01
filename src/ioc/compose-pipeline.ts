"use strict"

import * as awilix from "awilix"
import Pipeline from "../pipeline/pipeline"
import IPipelineConfig from "../schema/config/i-pipeline-config"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.IPipeline]: awilix.asValue({
      create: (config: IPipelineConfig) => new Pipeline(config)
    })
  }
}
