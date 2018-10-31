"use strict"

import express from "express"
import IFailResponder from "../../responders/i-fail-responder"

export default class FailResponder500 implements IFailResponder {
  public handle(req: express.Request, res: express.Response, err: any): void {
    res.json({ status: 500, message: "An application error occurred." })
  }
}
