"use strict"

import EventEmitter from "events"
import Component from "../components/component"
import TYPES from "../ioc/types"
import IComponentConfig from "../schema/config/i-component-config"

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
   * @TODO: See if we can extract this to another class/module
   *
   * Responsible for despatching to the appropriate event handler on
   * component.execute() success or failure.
   */
  protected addHandlerDespatchAspect(joinpoint: any): void {
    try {
      // Execute the component: component.execute(req, res)
      joinpoint.proceed()

      // Successful execute.
      joinpoint.target.emit(joinpoint.target.getSuccessEvent(), null, joinpoint.args[0])
    } catch (err) {
      // Failed execute.
      joinpoint.target.emit(joinpoint.target.getFailEvent(), err, joinpoint.args[0])
    }
  }
}
