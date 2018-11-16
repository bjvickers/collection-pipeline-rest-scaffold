import Component from "../../pipeline/components/component"
import NextHandler from "../../pipeline/handlers/next-handler"
import ResponseHandler from "../../pipeline/handlers/response-handler"
import IPipeline from "../../pipeline/i-pipeline"
import IComponentConfig from "../../pipeline/schema/config/i-component-config"
import IPipelineConfig from "../../pipeline/schema/config/i-pipeline-config"
import IContext from "../../pipeline/schema/context/i-context"
import ComponentFactory from "../factories/component-factory"
import NextHandlerFactory from "../factories/next-handler-factory"
import PipelineFactory from "../factories/pipeline-factory"
import ResponseHandlerFactory from "../factories/response-handler-factory"
import TYPES from "../ioc/types"
import IPipelineBuilder from "./i-pipeline-builder"

export default class PipelineBuilder implements IPipelineBuilder {
  protected pipelineFactory: PipelineFactory
  protected componentFactory: ComponentFactory
  protected nextHandlerFactory: NextHandlerFactory
  protected responseHandlerFactory: ResponseHandlerFactory
  protected pipeline: IPipeline

  public constructor(inject: any) {
    this.pipelineFactory = inject[TYPES.PipelineFactory]
    this.componentFactory = inject[TYPES.ComponentFactory]
    this.nextHandlerFactory = inject[TYPES.NextHandlerFactory]
    this.responseHandlerFactory = inject[TYPES.ResponseHandlerFactory]
  }

  public create(config: IPipelineConfig): void {
    this.pipeline = this.pipelineFactory.create(config)
  }

  public addComponent(config: IComponentConfig): void {
    const component: Component = this.componentFactory.create(config)
    this.attachFailHandler(config, component)
    this.attachSuccessHandler(config, component, this.pipeline)
    this.pipeline.add(component)
  }

  public getResult(): IPipeline {
    return this.pipeline
  }

  protected attachFailHandler(config: IComponentConfig, component: Component): void {
    const handler: ResponseHandler = this.responseHandlerFactory.create(config.handlers.fail, config.responders.fail)
    component.on(config.events.fail, (err: any, context: IContext) => {
      handler.handle(err, context)
    })
  }

  protected attachSuccessHandler(config: IComponentConfig, component: Component, pipeline: IPipeline): void {
    if (config.handlers.success === "NextHandler") {
      const nextHandler: NextHandler = this.nextHandlerFactory.create(config, pipeline)
      component.on(config.events.success, (err: any, context: IContext) => {
        nextHandler.handle(err, context)
      })
      return
    }

    const handler: ResponseHandler =
      this.responseHandlerFactory.create(config.handlers.success, config.responders.success)
    component.on(config.events.success, (err: any, context: IContext) => {
      handler.handle(err, context)
    })
  }
}
