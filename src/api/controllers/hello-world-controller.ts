import express from "express"
import IPipelineBuildDirector from "../../bin/builders/i-pipeline-build-director"
import TYPES from "../../bin/ioc/types"
import IPipeline from "../../pipeline/i-pipeline"
import IPipelineConfig from "../../pipeline/schema/config/i-pipeline-config"
import IContext from "../../pipeline/schema/context/i-context"
import IApiTransformer from "../transformers/i-api-transformer"
import IHelloWorldController from "./i-hello-world-controller"

export default class HelloWorldController implements IHelloWorldController {
  protected pipelineBuildDirector: IPipelineBuildDirector
  protected pipelineConfig: IPipelineConfig
  protected apiTransformer: IApiTransformer

  public constructor(inject: any) {
    this.pipelineBuildDirector = inject[TYPES.IPipelineBuildDirector]
    this.pipelineConfig = inject[TYPES.HelloWorldPipeline]
    this.apiTransformer = inject[TYPES.HelloWorldTransformer]
  }

  public get(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const context: IContext = this.apiTransformer.transform(req, res, this.pipelineConfig.name)

    // @TODO: The pipeline should be built once, in the constructor, and
    // @TODO: used for all IHelloWorldController.get() requests
    const pipeline: IPipeline = this.pipelineBuildDirector.assemble(this.pipelineConfig)
    pipeline.next(context)
  }

  public createRouter(): express.Router {
    return express.Router()
      .get("/",
        (req: express.Request, res: express.Response, next: express.NextFunction): void => {
          this.get(req, res, next)
        })
  }
}
