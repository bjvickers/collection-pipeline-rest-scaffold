"use strict"

import IComponentConfig from "../config/i-component-config"
import IContext from "../context/i-context"
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
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
