"use strict"

import { AwilixContainer } from "awilix"
import Component from "../components/component"
import ComponentConfig from "../config/component-config"
import Pipeline from "../pipeline/pipeline"
import PipelineConfig from "../config/pipeline-config"
import FailHandler from "../handlers/fail-handler"
import NextHandler from "../handlers/next-handler"
import FinishHandler from "../handlers/finish-handler"
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
    config.components.forEach((componentConfig: ComponentConfig) => {
      const component: Component = this.createComponent(componentConfig)
      this.attachFailHandler(componentConfig, component)
      this.attachNextHandler(componentConfig, component, pipeline)
      this.attachFinishHandler(componentConfig, component)
      pipeline.add(component)
    })
    return pipeline
  }
  
  protected createPipeline(config: PipelineConfig): Pipeline {
    const factory: { create: Function } = this.container.resolve(TYPES.Pipeline)
    return factory.create(config)
  }
  
  protected createComponent(config: ComponentConfig): Component {
    const factory: { create: Function} = this.container.resolve(config.type)
    return factory.create(config)
  }
  
  protected attachFailHandler(componentConfig: ComponentConfig, component: Component): void {
    const handler: FailHandler = this.failHandlerFactory.create(componentConfig)
    component.on(componentConfig.events.fail, (req: any, res: any, err: any) => {
      handler.handle(req, res, err)
    })
  }
  
  protected attachNextHandler(componentConfig: ComponentConfig, component: Component, pipeline: Pipeline): void {
    if (!componentConfig.events.next) {
      return
    }
    
    const handler: NextHandler = this.nextHandlerFactory.create(componentConfig, pipeline)
    component.on(componentConfig.events.next, (req: any, res: any) => {
      handler.handle(req, res)
    })
  }
  
  protected attachFinishHandler(componentConfig: ComponentConfig, component: Component): void {
    if (!componentConfig.events.finish) {
      return
    }
    
    const handler: FinishHandler = this.finishHandlerFactory.create(componentConfig)
    component.on(componentConfig.events.finish, (req: any, res: any) => {
      handler.handle(req, res)
    })
  }
}
