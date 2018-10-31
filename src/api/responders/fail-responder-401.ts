"use strict"

import express from "express"
import IFailResponder from "../../responders/i-fail-responder"

export default class FailResponder401 implements IFailResponder {
  // @TODO: Update responder to return responses consistent with the
  // @TODO: OpenAPI spec.
  public handle(req: express.Request, res: express.Response, err: any): void {
    res.status(401).json({ message: err.message })
  }
}
