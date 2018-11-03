"use strict"

import { domainLogger } from "../../lib/log/logger"
import IComponentConfig from "../schema/config/i-component-config"
import IContext from "../schema/context/i-context"
import Component from "./component"

export default class RunDbQuery extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Runs the query stored in the Context. Stores result in context.
  */
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
