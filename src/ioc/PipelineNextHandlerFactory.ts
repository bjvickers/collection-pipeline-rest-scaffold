"use strict"

import { AwilixContainer } from "awilix"
import Pipeline from "../pipeline/pipeline"
import ComponentConfig from "../config/component-config"
import NextHandler from "../handlers/next-handler"

export default class PipelineNextHandlerFactory {
  protected container: AwilixContainer
  
  public constructor(container: AwilixContainer) {
    this.container = container
  }
  
  public create(config: ComponentConfig, pipeline: Pipeline): NextHandler {
    const factory: { create: Function } = this.container.resolve(config.handlers.nextType)
    return factory.create(pipeline)
  }
}
