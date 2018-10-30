"use strict"

import IPipelineConfig from "../config/i-pipeline-config"
import IPipeline from "../pipeline/i-pipeline"

export default interface IPipelineBuildDirector {
  assemble(config: IPipelineConfig): IPipeline
}
