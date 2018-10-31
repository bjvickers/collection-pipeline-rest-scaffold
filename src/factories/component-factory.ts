"use strict"

import EventEmitter from "events"
import express from "express"
import Component from "../components/component"
import IComponentConfig from "../config/i-component-config"
import TYPES from "../ioc/types"

// Attach aspects to the components
/* tslint:disable */
const meld = require("meld")
/* tslint:enable */

export default class ComponentFactory {
  protected inject: any

  public constructor(inject: any) {
    this.inject = inject
  }

  public create(config: IComponentConfig): Component {
    const factory: { create: (config: IComponentConfig) => Component } = this.inject[config.type]
    const component: Component = factory.create(config)

    // Attach aspects to all new components
    // @TODO: Attach logging
    meld.around(component, "execute", this.addHandlerDespatchAspect)
    return component
  }

  /**
   * @TODO: See if we can create a HandlerDespatchFactory
   *
   * Responsible for despatching to the appropriate event handler on
   * component.execute() success or failure.
   */
  protected addHandlerDespatchAspect(joinpoint: any): void {
    let event: string
    try {
      // Execute the component: component.execute(req, res)
      joinpoint.proceed()

      // Successful execute. Identify the next|finish handler and despatch
      event = joinpoint.target.getNextEvent() || joinpoint.target.getFinishEvent()
      joinpoint.target.emit(event, joinpoint.args[0], joinpoint.args[1])
    } catch (err) {
      event = joinpoint.target.getFailEvent()
      joinpoint.target.emit(event, joinpoint.args[0], joinpoint.args[1], err)
    }
  }
}
