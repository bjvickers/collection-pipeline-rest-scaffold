"use strict"

import ResponseHandler from "../../pipeline/handlers/response-handler"
import IResponder from "../../pipeline/responders/i-responder"

export default class ResponseHandlerFactory {
  protected inject: any

  public constructor(inject: any) {
    this.inject = inject
  }

  public create(handlerType: string, responderType: string): ResponseHandler {
    const responder: IResponder = this.inject[responderType]
    const factory: { create: (responder: IResponder) => ResponseHandler } = this.inject[handlerType]
    return factory.create(responder)
  }
}
