"use strict"

import { AwilixContainer } from "awilix"
import ComponentConfig from "../config/component-config"
import FailHandler from "../handlers/fail-handler"
import IFailResponder from "../responders/i-fail-responder"

export default class PipelineFailHandlerFactory {
  protected container: AwilixContainer
  
  public constructor(container: AwilixContainer) {
    this.container = container
  }
  
  public create(config: ComponentConfig): FailHandler {
    const responder: IFailResponder = this.container.resolve(config.responders.failType)
    const factory: { create: Function } = this.container.resolve(config.handlers.failType)
    return factory.create(responder)
  }
}
