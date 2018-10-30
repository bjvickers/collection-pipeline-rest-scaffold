"use strict"

import * as awilix from "awilix"
import PipelineBuildDirector from "../builders/pipeline-build-director"
import PipelineBuilder from "../builders/pipeline-builder"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.IPipelineBuildDirector]: awilix.asClass(PipelineBuildDirector),
    [TYPES.IPipelineBuilder]: awilix.asClass(PipelineBuilder)
  }
}
