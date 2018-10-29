"use strict"

import { AwilixContainer } from "awilix"
import AbstractComponentConfig from "../config/AbstractComponentConfig"
import Pipeline from "../../pipeline/Pipeline"
import PipelineConfig from "../config/PipelineConfig"
import PipelineFailHandlerFactory from "./PipelineFailHandlerFactory"
import PipelineNextHandlerFactory from "./PipelineNextHandlerFactory"
import PipelineFinishHandlerFactory from "./PipelineFinishHandlerFactory"
import TYPES from "./types"

export default class PipelineFactory {
  protected container: AwilixContainer
  protected failHandlerFactory: PipelineFailHandlerFactory
  protected nextHandlerFactory: PipelineNextHandlerFactory
  protected finishHandlerFactory: PipelineFinishHandlerFactory
  
  public constructor(container: AwilixContainer) {
    this.container = container
    this.failHandlerFactory = container.resolve(TYPES.PipelineFailHandlerFactory)
    this.nextHandlerFactory = container.resolve(TYPES.PipelineNextHandlerFactory)
    this.finishHandlerFactory = container.resolve(TYPES.PipelineFinishHandlerFactory)
  }
  
  public create(config: PipelineConfig): Pipeline {
    const pipeline: Pipeline = this.createPipeline(config)
    
    config.components.forEach((componentConfig: AbstractComponentConfig) => {
      const component: AbstractComponent = this.createComponent(componentConfig)
      component.on(config.fail, this.failHandlerFactory.create(componentConfig))
      
      if (config.next) {
        component.on(config.next, this.nextHandlerFactory.create(componentConfig, pipeline))
      } else {
        component.on(config.finish, this.finishHandlerFactory.create(componentConfig))
      }
      
      pipeline.add(component)
    })
    
    return pipeline
  }

  protected createPipeline(config: PipelineConfig): Pipeline {
    return this.container.resolve(TYPES.Pipeline)(config)
  }
  
  protected createComponent(config: AbstractComponentConfig): AbstractComponent {
    return this.container.resolve(config.type)(config)
  }  
}
