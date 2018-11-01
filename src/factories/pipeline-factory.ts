"use strict"

import TYPES from "../ioc/types"
import IPipeline from "../pipeline/i-pipeline"
import IPipelineConfig from "../schema/config/i-pipeline-config"

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
