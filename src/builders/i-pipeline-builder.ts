"use strict"

import IComponentConfig from "../config/i-component-config"
import IPipelineConfig from "../config/i-pipeline-config"
import IPipeline from "../pipeline/i-pipeline"

export default interface IPipelineBuilder {
  create(config: IPipelineConfig): void
  addComponent(config: IComponentConfig): void
  getResult(): IPipeline
}
