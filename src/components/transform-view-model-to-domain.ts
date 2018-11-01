"use strict"

import IComponentConfig from "../config/i-component-config"
import IContext from "../context/i-context"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

// @TODO: Might need to break this up, eg:
// TransformRegistrationModelToDomain
// TransformUpdateProfileModelToDomain
// TransformUserDbModelToDomain
export default class TransformViewModelToDomain extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * Transforms Context.viewmodel data to Context.domain model(s)
   *
   * Refer to: https://github.com/diegohaz/schm
   *
   * in: context.viewmodel
   * out: context.domain
   * onFail: FailHandler
   * oonNext: NextHandler
  */
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
