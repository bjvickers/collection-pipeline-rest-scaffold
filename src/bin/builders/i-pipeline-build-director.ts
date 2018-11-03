"use strict"

import IPipeline from "../../pipeline/i-pipeline"
import IPipelineConfig from "../../pipeline/schema/config/i-pipeline-config"

export default interface IPipelineBuildDirector {
  assemble(config: IPipelineConfig): IPipeline
}
