"use strict"

import { AwilixContainer } from "awilix"
import IPipelineConfig from "../config/i-pipeline-config"
import TYPES from "../ioc/types"
import IPipeline from "../pipeline/i-pipeline"

export default class PipelineFactory {
  protected container: AwilixContainer

  public constructor(container: AwilixContainer) {
    this.container = container
  }

  public create(config: IPipelineConfig): IPipeline {
    const factory: { create: (config: IPipelineConfig) => IPipeline } =
      this.container.resolve(TYPES.IPipeline)
    return factory.create(config)
  }
}
