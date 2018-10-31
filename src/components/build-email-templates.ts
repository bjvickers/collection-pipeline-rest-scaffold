"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

export default class BuildEmailTemplates extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Builds the email templates, ready for send.
   *
   * in: context.emails
   * out: context.emails.outDir
   * onFail: FinishHandler (exit gracefully. user can later return and request resend)
   * onNext: NextHandler
  */
  public execute(req: express.Request, res: express.Response): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
