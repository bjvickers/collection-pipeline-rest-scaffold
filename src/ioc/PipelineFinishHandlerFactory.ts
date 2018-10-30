"use strict"

import { AwilixContainer } from "awilix"
import ComponentConfig from "../config/component-config"
import FinishHandler from "../handlers/finish-handler"
import IFinishResponder from "../responders/i-finish-responder"

export default class PipelineFinishHandlerFactory {
  protected container: AwilixContainer
  
  public constructor(container: AwilixContainer) {
    this.container = container
  }
  
  public create(config: ComponentConfig): FinishHandler {
    const responder: IFinishResponder = this.container.resolve(config.responders.finishType)
    const factory: { create: Function } = this.container.resolve(config.handlers.finishType)
    return factory.create(responder)
  }
}
