"use strict"

import IContext from "../context/i-context"
import IPipeline from "../pipeline/i-pipeline"
import IHandler from "./i-handler"

export default class NextHandler implements IHandler {
  protected pipeline: IPipeline

  public constructor(pipeline: IPipeline) {
    this.pipeline = pipeline
  }

  public handle(err: any, context: IContext): void {
    this.pipeline.next(context)
  }
}
