"use strict"

import { AwilixContainer } from "awilix"
import express from "express"
import IPipelineBuildDirector from "../../builders/i-pipeline-build-director"
import IPipelineConfig from "../../config/i-pipeline-config"
import TYPES from "../../ioc/types"

export default class GetUserController {
  protected pipelineBuildDirector: IPipelineBuildDirector
  protected pipelineConfig: IPipelineConfig

  public constructor(container: AwilixContainer) {
    this.pipelineBuildDirector = container.resolve(TYPES.IPipelineBuildDirector)
    this.pipelineConfig = container.resolve(TYPES.GetUserPipeline)
  }

  public get(req: express.Request, res: express.Response, next: express.NextFunction): void {
    // @TODO: This can be done once in the constructor.
    this.pipelineBuildDirector.assemble(this.pipelineConfig).next(req, res)
  }

  public createRouter(): express.Router {
    return express.Router()
      .get("/{id}",
        (req: express.Request, res: express.Response, next: express.NextFunction): void => {
          this.get(req, res, next)
        })
  }
}
