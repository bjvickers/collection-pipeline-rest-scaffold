"use strict"

import IComponentConfig from "../config/i-component-config"
import FinishHandler from "../handlers/finish-handler"
import IResponder from "../responders/i-responder"

export default class FinishHandlerFactory {
  protected inject: any

  public constructor(inject: any) {
    this.inject = inject
  }

  public create(config: IComponentConfig): FinishHandler {
    const responder: IResponder = this.inject[config.responders.finish]
    const factory: { create: (responder: IResponder) => FinishHandler } =
      this.inject[config.handlers.finish]
    return factory.create(responder)
  }
}
