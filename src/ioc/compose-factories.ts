"use strict"

import * as awilix from "awilix"
import PipelineFactory from "./PipelineFactory"
import PipelineFailHandlerFactory from "./PipelineFailHandlerFactory"
import PipelineFinishHandlerFactory from "./PipelineFinishHandlerFactory"
import PipelineNextHandlerFactory from "./PipelineNextHandlerFactory"
import TYPES from "./types"

export default function () {
  return {
    [TYPES.PipelineFactory]: awilix.asClass(PipelineFactory),
    [TYPES.PipelineFailHandlerFactory]: awilix.asClass(PipelineFailHandlerFactory),
    [TYPES.PipelineFinishHandlerFactory]: awilix.asClass(PipelineFinishHandlerFactory),
    [TYPES.PipelineNextHandlerFactory]: awilix.asClass(PipelineNextHandlerFactory)
  }
}
