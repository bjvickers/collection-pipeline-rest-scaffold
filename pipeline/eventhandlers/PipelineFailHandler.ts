"use strict"

import IFailResponder from "../../api/responders/IFailResponder"

export default class PipelineFailHandler {
  protected responder: IFailResponder
  
  public constructor(responder: IFailResponder) {
    this.responder = responder
  }
  
  public handle(req: express.Request, res: express.Response, err: Error): void {
    this.responder.handle(req, res, err)
  }
}
