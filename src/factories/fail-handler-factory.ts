"use strict"

import IComponentConfig from "../config/i-component-config"
import FailHandler from "../handlers/fail-handler"
import IFailResponder from "../responders/i-fail-responder"

export default class FailHandlerFactory {
  protected inject: any

  public constructor(inject: any) {
    this.inject = inject
  }

  public create(config: IComponentConfig): FailHandler {
    const responder: IFailResponder = this.inject[config.responders.fail]
    const factory: { create: (responder: IFailResponder) => FailHandler }
      = this.inject[config.handlers.fail]
    return factory.create(responder)
  }
}
