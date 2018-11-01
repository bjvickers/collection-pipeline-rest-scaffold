"use strict"

import IContext from "../context/i-context"
import IResponder from "../responders/i-responder"
import IHandler from "./i-handler"

export default class ResponseHandler implements IHandler {
  protected responder: IResponder

  public constructor(responder: IResponder) {
    this.responder = responder
  }

  public handle(err: any, context: IContext): void {
    this.responder.handle(err, context)
  }
}
