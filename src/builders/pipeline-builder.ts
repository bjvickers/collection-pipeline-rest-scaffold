"use strict"

import Component from "../components/component"
import IComponentConfig from "../config/i-component-config"
import IPipelineConfig from "../config/i-pipeline-config"
import IContext from "../context/i-context"
import ComponentFactory from "../factories/component-factory"
import FailHandlerFactory from "../factories/fail-handler-factory"
import FinishHandlerFactory from "../factories/finish-handler-factory"
import NextHandlerFactory from "../factories/next-handler-factory"
import PipelineFactory from "../factories/pipeline-factory"
import FailHandler from "../handlers/fail-handler"
import FinishHandler from "../handlers/finish-handler"
import NextHandler from "../handlers/next-handler"
import TYPES from "../ioc/types"
import IPipeline from "../pipeline/i-pipeline"
import IPipelineBuilder from "./i-pipeline-builder"

export default class PipelineBuilder implements IPipelineBuilder {
  protected pipelineFactory: PipelineFactory
  protected componentFactory: ComponentFactory
  protected failHandlerFactory: FailHandlerFactory
  protected nextHandlerFactory: NextHandlerFactory
  protected finishHandlerFactory: FinishHandlerFactory
  protected pipeline: IPipeline

  public constructor(inject: any) {
    this.pipelineFactory = inject[TYPES.PipelineFactory]
    this.componentFactory = inject[TYPES.ComponentFactory]
    this.failHandlerFactory = inject[TYPES.FailHandlerFactory]
    this.nextHandlerFactory = inject[TYPES.NextHandlerFactory]
    this.finishHandlerFactory = inject[TYPES.FinishHandlerFactory]
  }

  public create(config: IPipelineConfig): void {
    this.pipeline = this.pipelineFactory.create(config)
  }

  public addComponent(config: IComponentConfig): void {
    const component: Component = this.componentFactory.create(config)
    this.attachFailHandler(config, component)
    this.attachNextHandler(config, component, this.pipeline)
    this.attachFinishHandler(config, component)
    this.pipeline.add(component)
  }

  public getResult(): IPipeline {
    return this.pipeline
  }

  protected attachFailHandler(config: IComponentConfig, component: Component): void {
    const handler: FailHandler = this.failHandlerFactory.create(config)
    component.on(config.events.fail, (err: any, context: IContext) => {
      handler.handle(err, context)
    })
  }

  protected attachNextHandler(config: IComponentConfig, component: Component, pipeline: IPipeline): void {
    if (!config.events.next) {
      return
    }

    const handler: NextHandler = this.nextHandlerFactory.create(config, pipeline)
    component.on(config.events.next, (err: any, context: IContext) => {
      handler.handle(err, context)
    })
  }

  protected attachFinishHandler(config: IComponentConfig, component: Component): void {
    if (!config.events.finish) {
      return
    }

    const handler: FinishHandler = this.finishHandlerFactory.create(config)
    component.on(config.events.finish, (err: any, context: IContext) => {
      handler.handle(err, context)
    })
  }
}
