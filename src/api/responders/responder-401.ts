"use strict"

import IContext from "../../context/i-context"
import IResponder from "../../responders/i-responder"

export default class Responder401 implements IResponder {
  // @TODO: Update responder to return responses consistent with the
  // @TODO: OpenAPI spec.
  public handle(err: any, context: IContext): void {
    context.api.outgoing.status(401).json({ message: err.message })
  }
}
