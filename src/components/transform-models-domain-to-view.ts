"use strict"

import IComponentConfig from "../config/i-component-config"
import IContext from "../context/i-context"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

export default class TransformModelsDomainToView extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * Refer to: https://github.com/diegohaz/schm
  */
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
