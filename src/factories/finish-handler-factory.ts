"use strict"

import IComponentConfig from "../config/i-component-config"
import FinishHandler from "../handlers/finish-handler"
import IFinishResponder from "../responders/i-finish-responder"

export default class FinishHandlerFactory {
  protected inject: any

  public constructor(inject: any) {
    this.inject = inject
  }

  public create(config: IComponentConfig): FinishHandler {
    const responder: IFinishResponder = this.inject[config.responders.finish]
    const factory: { create: (responder: IFinishResponder) => FinishHandler } =
      this.inject[config.handlers.finish]
    return factory.create(responder)
  }
}
