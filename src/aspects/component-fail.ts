"use strict"

import Component from "../components/component"
import Pipeline from "../pipeline/pipeline"

export default class AspectComponentFail {
  public process(pipeline: Pipeline, component: Component, err: any): void {
    component.emit(component.getFailEvent(), { pipeline, err })
  }
}
