import IResponder from "../responders/i-responder"
import IContext from "../schema/context/i-context"
import IHandler from "./i-handler"

/**
 * Triggers a response to the client after successful/failed pipeline
 * execution.
 */
export default class ResponseHandler implements IHandler {
  protected responder: IResponder

  public constructor(responder: IResponder) {
    this.responder = responder
  }

  public handle(err: any, context: IContext): void {
    this.responder.handle(err, context)
  }
}
