"use strict"

import Component from "../components/component"
import IPipelineConfig from "../schema/config/i-pipeline-config"
import IContext from "../schema/context/i-context"

export default interface IPipeline {
  add(component: Component): void
  getConfig(): IPipelineConfig
  next(context: IContext): void
}
