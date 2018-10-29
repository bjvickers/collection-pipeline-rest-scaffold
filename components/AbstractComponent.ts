"use strict"

import express from "express"
import EventEmitter from "events"
import AbstractComponentConfig from "../config/AbstractComponentConfig"

export default abstract class AbstractComponent extends EventEmitter {
  protected config: AbstractComponentConfig
  
  public constructor(config: AbstractComponentConfig) {
    super()
    this.config = config
  }
  
  abstract execute(req: express.Request, res: express.Response): void
  
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
