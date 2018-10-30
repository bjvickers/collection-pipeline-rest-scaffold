"use strict"

import express from "express"
import Pipeline from "../pipeline/pipeline"

export default class NextHandler {
  protected pipeline: Pipeline
  
  public constructor(pipeline: Pipeline) {
    this.pipeline = pipeline
  }
  
  public handle(req: express.Request, res: express.Response): void {
    this.pipeline.next(req, res)
  }
}
