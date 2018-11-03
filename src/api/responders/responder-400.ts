"use strict"

import IResponder from "../../pipeline/responders/i-responder"
import IContext from "../../pipeline/schema/context/i-context"

export default class Responder400 implements IResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.json({ status: 400, message: err.message })
  }
}
