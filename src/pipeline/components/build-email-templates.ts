"use strict"

import { domainLogger } from "../../lib/log/logger"
import IComponentConfig from "../schema/config/i-component-config"
import IContext from "../schema/context/i-context"
import Component from "./component"

export default class BuildEmailTemplates extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Builds the email templates, ready for send. Adds location of
   * built emails to context.
  */
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
