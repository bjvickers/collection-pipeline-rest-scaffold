"use strict"

import express from "express"
import Component from "../components/component"
import IPipelineConfig from "../config/i-pipeline-config"

export default interface IPipeline {
  add(component: Component): void
  getConfig(): IPipelineConfig
  next(req: express.Request, res: express.Response): void
}
