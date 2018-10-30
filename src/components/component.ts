"use strict"

import express from "express"
import EventEmitter from "events"
import ComponentConfig from "../config/component-config"

export default abstract class Component extends EventEmitter {
  protected config: ComponentConfig
  
  public constructor(config: ComponentConfig) {
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
