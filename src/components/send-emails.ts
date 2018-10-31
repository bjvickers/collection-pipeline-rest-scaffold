"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import Component from "./component"

export default class SendEmails extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Sends the emails defined in context.emails
   *
   * in: context.emails
   * out: null
   * onFail: FinishHandler (exit gracefully. user can later return and request resend)
   * onNext: NextHandler
  */
  public execute(req: express.Request, res: express.Response): void {
    // console.log("SendEmails::EXECUTE")
    return
  }
}
