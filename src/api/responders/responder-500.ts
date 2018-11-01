"use strict"

import IContext from "../../context/i-context"
import IResponder from "../../responders/i-responder"

export default class Responder500 implements IResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.json({ status: 500, message: "An application error occurred." })
  }
}
