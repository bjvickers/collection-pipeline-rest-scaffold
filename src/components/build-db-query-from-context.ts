"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

export default class BuildDbQueryFromContext extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Builds a db query from paramters given in the Context.
   *
   * in: context.domain.user
   * out: context.dbquery
   * onFail: FailHandler
   * onNext: NextHandler
  */
  public execute(req: express.Request, res: express.Response): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
