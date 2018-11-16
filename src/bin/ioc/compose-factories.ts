import * as awilix from "awilix"
import ComponentFactory from "../factories/component-factory"
import NextHandlerFactory from "../factories/next-handler-factory"
import PipelineFactory from "../factories/pipeline-factory"
import ResponseHandlerFactory from "../factories/response-handler-factory"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.ComponentFactory]: awilix.asClass(ComponentFactory),
    [TYPES.PipelineFactory]: awilix.asClass(PipelineFactory),
    [TYPES.ResponseHandlerFactory]: awilix.asClass(ResponseHandlerFactory),
    [TYPES.NextHandlerFactory]: awilix.asClass(NextHandlerFactory)
  }
}
