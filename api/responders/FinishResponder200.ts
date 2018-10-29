"use strict"

import express from "express"
import IFinishResponder from "./IFinishResponder"

export default class FinishResponder200 implements IFinishResponder {
  public handle(req: express.Request, res: express.Response): void {
    res.json(200, {})
  }
}
