"use strict"

import IPipeline from "../pipeline/i-pipeline"
import IContext from "../schema/context/i-context"
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
