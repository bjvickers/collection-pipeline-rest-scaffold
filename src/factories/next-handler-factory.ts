"use strict"

import { AwilixContainer } from "awilix"
import IComponentConfig from "../config/i-component-config"
import NextHandler from "../handlers/next-handler"
import IPipeline from "../pipeline/i-pipeline"

export default class NextHandlerFactory {
  protected container: AwilixContainer

  public constructor(container: AwilixContainer) {
    this.container = container
  }

  public create(config: IComponentConfig, pipeline: IPipeline): NextHandler {
    const factory: { create: (pipeline: IPipeline) => NextHandler } =
      this.container.resolve(config.handlers.nextType)
    return factory.create(pipeline)
  }
}
