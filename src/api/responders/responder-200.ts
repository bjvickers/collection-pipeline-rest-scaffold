import IResponder from "../../pipeline/responders/i-responder"
import IContext from "../../pipeline/schema/context/i-context"

export default class Responder200 implements IResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.status(200).json(context.api.result)
  }
}
