"use strict"

import express from "express"
import IPipelineBuildDirector from "../../builders/i-pipeline-build-director"
import IPipelineConfig from "../../config/i-pipeline-config"
import TYPES from "../../ioc/types"

export default class RegistrationController {
  protected pipelineBuildDirector: IPipelineBuildDirector
  protected pipelineConfig: IPipelineConfig

  public constructor(inject: any) {
    this.pipelineBuildDirector = inject[TYPES.IPipelineBuildDirector]
    this.pipelineConfig = inject[TYPES.RegistrationPipeline]
  }

  public post(req: express.Request, res: express.Response, next: express.NextFunction): void {
    // @TODO: This can be done once in the constructor.
    this.pipelineBuildDirector.assemble(this.pipelineConfig).next(req, res)
  }

  public createRouter(): express.Router {
    return express.Router()
      .post("/",
        (req: express.Request, res: express.Response, next: express.NextFunction): void => {
          this.post(req, res, next)
        })
  }
}
