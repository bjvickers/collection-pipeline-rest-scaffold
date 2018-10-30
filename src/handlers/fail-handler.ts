"use strict"

import express from "express"
import IFailResponder from "../responders/i-fail-responder"

export default class FailHandler {
  protected responder: IFailResponder
  
  public constructor(responder: IFailResponder) {
    this.responder = responder
  }
  
  public handle(req: express.Request, res: express.Response, err: any): void {
    this.responder.handle(req, res, err)
  }
}
