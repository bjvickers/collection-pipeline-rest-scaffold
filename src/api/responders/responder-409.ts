"use strict"

import IResponder from "../../responders/i-responder"
import IContext from "../../schema/context/i-context"

export default class Responder409 implements IResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.status(409).json({ message: err.message })
  }
}
