"use strict"

import IContext from "../context/i-context"
import IFailResponder from "../responders/i-fail-responder"

export default class FailHandler {
  protected responder: IFailResponder

  public constructor(responder: IFailResponder) {
    this.responder = responder
  }

  public handle(err: any, context: IContext): void {
    this.responder.handle(err, context)
  }
}
