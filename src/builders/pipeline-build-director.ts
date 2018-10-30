"use strict"

import { AwilixContainer } from "awilix"
import IPipelineConfig from "../config/i-pipeline-config"
import TYPES from "../ioc/types"
import IPipeline from "../pipeline/i-pipeline"
import IPipelineBuildDirector from "./i-pipeline-build-director"
import IPipelineBuilder from "./i-pipeline-builder"

export default class PipelineBuildDirector implements IPipelineBuildDirector {
  protected builder: IPipelineBuilder

  public constructor(container: AwilixContainer) {
    this.builder = container.resolve(TYPES.IPipelineBuilder)
  }

  public assemble(config: IPipelineConfig): IPipeline {
    this.builder.create(config)
    config.components.forEach((componentConfig) => this.builder.addComponent(componentConfig))
    return this.builder.getResult()
  }
}
