"use strict"

import express from "express"

export default interface IFinishResponder {
  handle(req: express.Request, res: express.Response): void
}
