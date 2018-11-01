"use strict"

import EventEmitter from "events"
import IComponentConfig from "../schema/config/i-component-config"
import IContext from "../schema/context/i-context"

export default abstract class Component extends EventEmitter {
  protected config: IComponentConfig

  public constructor(config: IComponentConfig) {
    super()
    this.config = config
  }

  public abstract execute(context: IContext): void

  public getFailEvent(): string {
    return this.config.events.fail
  }

  public getSuccessEvent(): string {
    return this.config.events.success
  }
}
