"use strict"

import IResponder from "../../responders/i-responder"
import IContext from "../../schema/context/i-context"

export default class Responder200 implements IResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.json({ status: 200 })
  }
}
