"use strict"

import IContext from "../../context/i-context"
import IResponder from "../../responders/i-responder"

export default class Responder409 implements IResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.status(409).json({ message: err.message })
  }
}
