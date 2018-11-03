"use strict"

import IPipeline from "../../pipeline/i-pipeline"
import IComponentConfig from "../../schema/config/i-component-config"
import IPipelineConfig from "../../schema/config/i-pipeline-config"

export default interface IPipelineBuilder {
  create(config: IPipelineConfig): void
  addComponent(config: IComponentConfig): void
  getResult(): IPipeline
}
