import { domainLogger } from "../../lib/log/logger"
import IComponentConfig from "../schema/config/i-component-config"
import IContext from "../schema/context/i-context"
import Component from "./component"

export default class HelloWorld extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement @Log()
   * Attaches the "hello world" strin to the context
  */
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    context.api.result = { message: "hello world" }
  }
}
