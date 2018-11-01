"use strict"

import express from "express"
import IPipelineBuildDirector from "../../builders/i-pipeline-build-director"
import IPipelineConfig from "../../config/i-pipeline-config"
import IContext from "../../context/i-context"
import TYPES from "../../ioc/types"

export default class RegistrationController {
  protected pipelineBuildDirector: IPipelineBuildDirector
  protected pipelineConfig: IPipelineConfig

  public constructor(inject: any) {
    this.pipelineBuildDirector = inject[TYPES.IPipelineBuildDirector]
    this.pipelineConfig = inject[TYPES.RegistrationPipeline]
  }

  public post(req: express.Request, res: express.Response, next: express.NextFunction): void {
    // @TODO: Implement proper schema transformation and put in api/transformers/
    const context: IContext = {
      api: {
        incoming: req,
        outgoing: res
      },
      db: null,
      email: null,
      models: null,
      pipeline: this.pipelineConfig.name
    }

    // @TODO: The pipeline should be built once, in the constructor, and
    // @TODO: used for all RegistrationController.post() requests
    this.pipelineBuildDirector.assemble(this.pipelineConfig).next(context)
  }

  public createRouter(): express.Router {
    return express.Router()
      .post("/",
        (req: express.Request, res: express.Response, next: express.NextFunction): void => {
          this.post(req, res, next)
        })
  }
}
