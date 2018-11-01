"use strict"

import EventEmitter from "events"
import IComponentConfig from "../config/i-component-config"
import IContext from "../context/i-context"

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

  public getNextEvent(): string {
    return this.config.events.next
  }

  public getFinishEvent(): string {
    return this.config.events.finish
  }
}
