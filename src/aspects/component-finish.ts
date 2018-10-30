"use strict"

import Component from "../components/component"
import Pipeline from "../pipeline/pipeline"

export default class AspectComponentSuccess {
  public process(pipeline: Pipeline, component: Component): void {
    // @TODO: How to test for whether event handler is registered?
    // That way we can only emit once, otherwise one event is currently being ignored.
    // @TODO: How to pass through arguments to the registered handler?
    component.emit(component.getNextEvent(), { pipeline })
    component.emit(component.getFinishEvent(), { pipeline })
  }
}
