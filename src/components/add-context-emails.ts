"use strict"

import IComponentConfig from "../config/i-component-config"
import IContext from "../context/i-context"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

export default class AddContextEmails extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Attaches email templates used by the pipeline
  */
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
