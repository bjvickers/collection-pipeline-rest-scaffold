"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import Component from "./component"

export default class FindDbUser extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Locates a user in the database by context.dbquery
   *
   * in: context.dbquery
   * out: context.db.user
   * onFail: FailHandler
   * oonNext: NextHandler
  */
  public execute(req: express.Request, res: express.Response): void {
    // console.log("FindDbUser::EXECUTE")
    return
  }
}
