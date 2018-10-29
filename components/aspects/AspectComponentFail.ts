"use strict"

import AbstractComponent from "../AbstractComponent"
import Pipeline from "../../pipeline/Pipeline"

export default class AspectComponentFail {
  public process(pipeline: Pipeline, component: AbstractComponent, err: Error): void {
    return component.emit(component.getFailEvent(), { pipeline, err })
  }
}
