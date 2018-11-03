"use strict"

import IPipeline from "../../pipeline/i-pipeline"
import IPipelineConfig from "../../pipeline/schema/config/i-pipeline-config"
import TYPES from "../ioc/types"
import IPipelineBuildDirector from "./i-pipeline-build-director"
import IPipelineBuilder from "./i-pipeline-builder"

export default class PipelineBuildDirector implements IPipelineBuildDirector {
  protected builder: IPipelineBuilder

  public constructor(inject: any) {
    this.builder = inject[TYPES.IPipelineBuilder]
  }

  public assemble(config: IPipelineConfig): IPipeline {
    this.builder.create(config)
    config.components.forEach((componentConfig) => this.builder.addComponent(componentConfig))
    return this.builder.getResult()
  }
}
