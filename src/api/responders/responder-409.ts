import IResponder from "../../pipeline/responders/i-responder"
import IContext from "../../pipeline/schema/context/i-context"

export default class Responder409 implements IResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.status(409).json({ message: err.message })
  }
}
