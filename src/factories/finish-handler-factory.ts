"use strict"

import { AwilixContainer } from "awilix"
import IComponentConfig from "../config/i-component-config"
import FinishHandler from "../handlers/finish-handler"
import IFinishResponder from "../responders/i-finish-responder"

export default class FinishHandlerFactory {
  protected container: AwilixContainer

  public constructor(container: AwilixContainer) {
    this.container = container
  }

  public create(config: IComponentConfig): FinishHandler {
    const responder: IFinishResponder = this.container.resolve(config.responders.finishType)
    const factory: { create: (responder: IFinishResponder) => FinishHandler } =
      this.container.resolve(config.handlers.finishType)
    return factory.create(responder)
  }
}
