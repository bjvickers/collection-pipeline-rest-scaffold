"use strict"

import AbstractComponentConfig from "../config/AbstractComponentConfig"
import PipelineFailHandler from "../pipeline/PipelineFailHandler"
import IFailResponder from "../api/responders/IFailResponder"

export default class PipelineFailHandlerFactory {
  protected container: any
  
  public constructor(container: any) {
    this.container = container
  }
  
  public create(config: AbstractComponentConfig): PipelineFailHandler {
    const responder: IFailResponder = this.createResponder(config.responders.failType)
    return this.container.resolve(config.handlers.failType).inject({ responder: responder })
  }
  
  protected createResponder(type: string): IFailResponder {
    return this.container.resolve(type)
  }
}
