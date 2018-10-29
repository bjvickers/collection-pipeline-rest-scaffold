"use strict"

import Pipeline from "../pipeline/Pipeline"

export default class PipelineNextHandler {
  public handle(pipeline: Pipeline): void {
    pipeline.next()
  }
}
