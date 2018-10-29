"use strict"

import express from "express"
import AbstractComponent from "../components/AbstractComponent"
import PipelineConfig from "../config/PipelineConfig"

export default class Pipeline {
  protected config: PipelineConfig
  protected components: AbstractComponent[]
  
  public constructor(config: PipelineConfig) {
    this.config = config
    this.components = []
  }
  
  public add(component: AbstractComponent) {
    this.components.push(component)
  }
  
  public getConfig(): PipelineConfig {
    return this.config
  }
  
  public next(req: express.Request, res: express.Response): void {
    this.components.shift().execute(req, res)
  }
}
