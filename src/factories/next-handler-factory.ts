"use strict"

import IComponentConfig from "../config/i-component-config"
import NextHandler from "../handlers/next-handler"
import IPipeline from "../pipeline/i-pipeline"

export default class NextHandlerFactory {
  protected inject: any

  public constructor(inject: any) {
    this.inject = inject
  }

  public create(config: IComponentConfig, pipeline: IPipeline): NextHandler {
    const factory: { create: (pipeline: IPipeline) => NextHandler } = this.inject[config.handlers.success]
    return factory.create(pipeline)
  }
}
