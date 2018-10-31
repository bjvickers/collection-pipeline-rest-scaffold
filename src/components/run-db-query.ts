"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

export default class RunDbQuery extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Runs the query stored in the Context.
   *
   * in: context.db
   * out: context.db
   * onFail: FailHandler
   * onNext: NextHandler
  */
  public execute(req: express.Request, res: express.Response): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
