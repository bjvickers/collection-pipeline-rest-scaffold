"use strict"

import express from "express"
import IFinishResponder from "../responders/i-finish-responder"

export default class FinishHandler {
  protected responder: IFinishResponder
  
  public constructor(responder: IFinishResponder) {
    this.responder = responder
  }
  
  public handle(req: express.Request, res: express.Response): void {
    this.responder.handle(req, res)
  }
}
