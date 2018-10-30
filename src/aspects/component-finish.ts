"use strict"

import Component from "../components/component"
import IPipeline from "../pipeline/i-pipeline"

export default class AspectComponentSuccess {
  public process(pipeline: IPipeline, component: Component): void {
    // @TODO: How to test for whether event handler is registered?
    // That way we can only emit once, otherwise one event is currently being ignored.
    // @TODO: How to pass through arguments to the registered handler?
    component.emit(component.getNextEvent(), { pipeline })
    component.emit(component.getFinishEvent(), { pipeline })
  }
}
