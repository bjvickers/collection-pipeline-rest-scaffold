import { domainLogger } from "../../lib/log/logger"
import IComponentConfig from "../schema/config/i-component-config"
import IContext from "../schema/context/i-context"
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
  }
}
