"use strict"

import Component from "../components/component"
import IPipelineConfig from "../schema/config/i-pipeline-config"
import IContext from "../schema/context/i-context"
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

  public next(context: IContext): void {
    if (this.currentPos === this.components.length) {
      throw new Error()
    }
    this.components[this.currentPos++].execute(context)
  }
}
