import { domainLogger } from "../../lib/log/logger"
import IComponentConfig from "../schema/config/i-component-config"
import IContext from "../schema/context/i-context"
import Component from "./component"

export default class TransformModelsDomainToView extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
  }
}
