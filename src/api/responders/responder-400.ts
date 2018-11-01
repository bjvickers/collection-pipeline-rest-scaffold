"use strict"

import IResponder from "../../responders/i-responder"
import IContext from "../../schema/context/i-context"

export default class Responder400 implements IResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.json({ status: 400, message: err.message })
  }
}
