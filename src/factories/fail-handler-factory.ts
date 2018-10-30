"use strict"

import { AwilixContainer } from "awilix"
import IComponentConfig from "../config/i-component-config"
import FailHandler from "../handlers/fail-handler"
import IFailResponder from "../responders/i-fail-responder"

export default class FailHandlerFactory {
  protected container: AwilixContainer

  public constructor(container: AwilixContainer) {
    this.container = container
  }

  public create(config: IComponentConfig): FailHandler {
    const responder: IFailResponder = this.container.resolve(config.responders.failType)
    const factory: { create: (responder: IFailResponder) => FailHandler }
      = this.container.resolve(config.handlers.failType)
    return factory.create(responder)
  }
}
