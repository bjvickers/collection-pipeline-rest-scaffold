"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import Component from "./component"

export default class EnforceUniqueUserEmail extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Locates a user in the database by context.domain.user
   *
   * in: context.domain.user
   * out: not used
   * onFail: FailHandler
   * oonNext: NextHandler
  */
  public execute(req: express.Request, res: express.Response): void {
    // console.log("EnforceUniqueUserEmail::EXECUTE")
    return
  }
}
