"use strict"

import Component from "../components/component"
import IPipeline from "../pipeline/i-pipeline"

export default class AspectComponentFail {
  public process(pipeline: IPipeline, component: Component, err: any): void {
    component.emit(component.getFailEvent(), { pipeline, err })
  }
}
