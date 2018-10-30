"use strict"

import * as awilix from "awilix"
import ComponentFactory from "../factories/component-factory"
import FailHandlerFactory from "../factories/fail-handler-factory"
import FinishHandlerFactory from "../factories/finish-handler-factory"
import NextHandlerFactory from "../factories/next-handler-factory"
import PipelineFactory from "../factories/pipeline-factory"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.ComponentFactory]: awilix.asClass(ComponentFactory),
    [TYPES.PipelineFactory]: awilix.asClass(PipelineFactory),
    [TYPES.FailHandlerFactory]: awilix.asClass(FailHandlerFactory),
    [TYPES.FinishHandlerFactory]: awilix.asClass(FinishHandlerFactory),
    [TYPES.NextHandlerFactory]: awilix.asClass(NextHandlerFactory)
  }
}
