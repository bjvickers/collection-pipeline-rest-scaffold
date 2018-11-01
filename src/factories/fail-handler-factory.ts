"use strict"

import IComponentConfig from "../config/i-component-config"
import FailHandler from "../handlers/fail-handler"
import IResponder from "../responders/i-responder"

export default class FailHandlerFactory {
  protected inject: any

  public constructor(inject: any) {
    this.inject = inject
  }

  public create(config: IComponentConfig): FailHandler {
    const responder: IResponder = this.inject[config.responders.fail]
    const factory: { create: (responder: IResponder) => FailHandler }
      = this.inject[config.handlers.fail]
    return factory.create(responder)
  }
}
