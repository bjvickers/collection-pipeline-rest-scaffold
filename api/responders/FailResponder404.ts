"use strict"

import express from "express"
import IFailResponder from "./IFailResponder"

export default class FailResponder404 implements IFailResponder {
  public handle(req: express.Request, res: express.Response, err: Error): void {
    res.json(404, { message: err.message })
  }
}
