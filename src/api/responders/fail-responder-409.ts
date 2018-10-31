"use strict"

import express from "express"
import IFailResponder from "../../responders/i-fail-responder"

export default class FailResponder409 implements IFailResponder {
  // @TODO: Update responder to return responses consistent with the
  // @TODO: OpenAPI spec.
  public handle(req: express.Request, res: express.Response, err: any): void {
    res.status(409).json({ message: err.message })
  }
}
