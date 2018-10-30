"use strict"

import express from "express"
import Component from "../components/component"
import PipelineConfig from "../config/pipeline-config"

export default class Pipeline {
  protected config: PipelineConfig
  protected components: Component[]
  protected currentPos: number
  
  public constructor(config: PipelineConfig) {
    this.config = config
    this.components = []
    this.currentPos = 0
  }
  
  public add(component: Component) {
    this.components.push(component)
    this.currentPos++
  }
  
  public getConfig(): PipelineConfig {
    return this.config
  }
  
  public next(req: express.Request, res: express.Response): void {
    if (this.currentPos === this.components.length) {
      throw new Error()
    }
    this.components[++this.currentPos].execute(req, res)
  }
}
