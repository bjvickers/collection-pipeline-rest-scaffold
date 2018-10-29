"use strict"

import ISuccessResponder from "../../api/responders/ISuccessResponder"

export default class PipelineFinishHandler {
  protected responder: ISuccessResponder
  
  public constructor(responder: ISuccessResponder) {
    this.responder = responder
  }
  
  public handle(req: express.Request, res: express.Response): void {
    this.responder.handle(req, res)
  }
}
