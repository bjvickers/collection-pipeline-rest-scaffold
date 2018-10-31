"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

export default class SaveNewUserToDb extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Saves a new user to the database
   *
   * in: context.domain.user
   * out: context.db.user
   * onFail: FailHandler
   * oonNext: NextHandler
  */
  public execute(req: express.Request, res: express.Response): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
