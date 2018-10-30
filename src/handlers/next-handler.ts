"use strict"

import express from "express"
import IPipeline from "../pipeline/i-pipeline"

export default class NextHandler {
  protected pipeline: IPipeline

  public constructor(pipeline: IPipeline) {
    this.pipeline = pipeline
  }

  public handle(req: express.Request, res: express.Response): void {
    this.pipeline.next(req, res)
  }
}
