"use strict"

import IContext from "../../context/i-context"
import IResponder from "../../responders/i-responder"

export default class Responder200 implements IResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.json({ status: 200 })
  }
}
