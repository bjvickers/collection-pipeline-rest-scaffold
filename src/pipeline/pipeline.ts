"use strict"

import express from "express"
import Component from "../components/component"
import IPipelineConfig from "../config/i-pipeline-config"
import IPipeline from "./i-pipeline"

export default class Pipeline implements IPipeline {
  protected config: IPipelineConfig
  protected components: Component[]
  protected currentPos: number

  public constructor(config: IPipelineConfig) {
    this.config = config
    this.components = []
    this.currentPos = 0
  }

  public add(component: Component): void {
    this.components.push(component)
  }

  public getConfig(): IPipelineConfig {
    return this.config
  }

  public next(req: express.Request, res: express.Response): void {
    if (this.currentPos === this.components.length) {
      throw new Error()
    }
    this.components[this.currentPos++].execute(req, res)
  }
}
