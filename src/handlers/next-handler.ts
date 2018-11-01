"use strict"

import IContext from "../context/i-context"
import IPipeline from "../pipeline/i-pipeline"

// @TODO: implement an IHandler interface
export default class NextHandler {
  protected pipeline: IPipeline

  public constructor(pipeline: IPipeline) {
    this.pipeline = pipeline
  }

  public handle(err: any, context: IContext): void {
    this.pipeline.next(context)
  }
}
