"use strict"

import AbstractComponentConfig from "../config/AbstractComponentConfig"
import Pipeline from "../../pipeline/Pipeline"
import PipelineNextHandler from "../pipeline/PipelineNextHandler"

export default class PipelineNextHandlerFactory {
  protected container: any
  
  public constructor(container: any) {
    this.container = container
  }
  
  public create(config: AbstractComponentConfig, pipeline: Pipeline): PipelineNextHandler {
    return this.container.resolve(config.handlers.nextType).inject({ pipeline: pipeline })
  }
}
