"use strict"

import IPipelineConfig from "../config/i-pipeline-config"
import TYPES from "../ioc/types"
import IPipeline from "../pipeline/i-pipeline"

export default class PipelineFactory {
  protected inject: any

  public constructor(inject: any) {
    this.inject = inject
  }

  public create(config: IPipelineConfig): IPipeline {
    const factory: { create: (config: IPipelineConfig) => IPipeline } = this.inject[TYPES.IPipeline]
    return factory.create(config)
  }
}
