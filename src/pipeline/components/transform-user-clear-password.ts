import { domainLogger } from "../../lib/log/logger"
import IComponentConfig from "../schema/config/i-component-config"
import IContext from "../schema/context/i-context"
import Component from "./component"

export default class TransformUserClearPassword extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Transforms the clear-text context.models.domain.user.clearPassword into an
   * encrypted password, and stores in context.models.domain.user.encPassword
  */
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
  }
}
