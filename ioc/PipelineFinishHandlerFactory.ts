"use strict"

import AbstractComponentConfig from "../config/AbstractComponentConfig"
import PipelineFinishHandler from "../pipeline/PipelineFinishHandler"
import IFinishResponder from "../api/responders/IFinishResponder"

export default class PipelineFinishHandlerFactory {
  protected container: any
  
  public constructor(container: any) {
    this.container = container
  }
  
  public create(config: AbstractComponentConfig): PipelineFinishHandler {
    const responder: IFinishResponder = this.createResponder(config.responders.finishType)
    return this.container.resolve(config.handlers.finishType).inject({ responder: responder })
  }
  
  protected createResponder(type: string): IFinishResponder {
    return this.container.resolve(type)
  }
}
