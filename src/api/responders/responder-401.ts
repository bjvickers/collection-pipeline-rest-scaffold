"use strict"

import IResponder from "../../pipeline/responders/i-responder"
import IContext from "../../pipeline/schema/context/i-context"

export default class Responder401 implements IResponder {
  // @TODO: Update responder to return responses consistent with the
  // @TODO: OpenAPI spec.
  public handle(err: any, context: IContext): void {
    context.api.outgoing.status(401).json({ message: err.message })
  }
}
