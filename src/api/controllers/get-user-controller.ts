"use strict"

import express from "express"
import { AwilixContainer } from "awilix"
import PipelineConfig from "../../config/pipeline-config"
import PipelineFactory from "../../ioc/PipelineFactory"
import TYPES from "../../ioc/types"

export default class GetUserController {
  protected pipelineFactory: PipelineFactory
  protected pipelineConfig: PipelineConfig
  
  public constructor(container: AwilixContainer) {
    this.pipelineFactory = container.resolve(TYPES.PipelineFactory)
    this.pipelineConfig = container.resolve(TYPES.GetUserPipeline)
  }
  
  public get(req: express.Request, res: express.Response, next: express.NextFunction): void {
    this.pipelineFactory.create(this.pipelineConfig).next(req, res)
  }
  
  public createRouter(): express.Router {
    return express.Router()
      .get("/{id}", 
        (req: express.Request, res: express.Response, next: express.NextFunction): void => {
          this.get(req, res, next)
        })
  }
}
