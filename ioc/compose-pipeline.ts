"use strict"

import awilix = require("awilix")
import Pipeline from "../pipeline/Pipeline"
import PipelineFailHandler from "../pipeline/eventhandlers/PipelineFailHandler"
import PipelineFinishHandler from "../pipeline/eventhandlers/PipelineFinishHandler"
import PipelineNextHandler from "../pipeline/eventhandlers/PipelineNextHandler"
import TYPES from "./TYPES"

export default function () {
  return {
    TYPES.Pipeline: awilix.asFunction((config: PipelineConfig) => {
      return new Pipeline(config)
    }),
    TYPES.PipelineFailHandler: awilix.asClass(PipelineFailHandler),
    TYPES.PipelineFinishHandler: awilix.asClass(PipelineFinishHandler),
    TYPES.PipelineNextHandler: awilix.asClass(PipelineNextHandler)
  }
}
