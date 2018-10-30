"use strict"

import EventEmitter from "events"
import express from "express"
import IComponentConfig from "../config/i-component-config"

export default abstract class Component extends EventEmitter {
  protected config: IComponentConfig

  public constructor(config: IComponentConfig) {
    super()
    this.config = config
  }

  public abstract execute(req: express.Request, res: express.Response): void

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
