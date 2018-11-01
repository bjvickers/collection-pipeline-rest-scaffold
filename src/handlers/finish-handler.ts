"use strict"

import IContext from "../context/i-context"
import IFinishResponder from "../responders/i-finish-responder"

export default class FinishHandler {
  protected responder: IFinishResponder

  public constructor(responder: IFinishResponder) {
    this.responder = responder
  }

  public handle(err: any, context: IContext): void {
    this.responder.handle(err, context)
  }
}
