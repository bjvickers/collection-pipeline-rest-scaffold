"use strict"

import IComponentConfig from "../config/i-component-config"
import IContext from "../context/i-context"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

// @TODO: Might be unnecessarily specific
// @TODO: RunDbCommand might do the job, by transformin parameters from the Context
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
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
