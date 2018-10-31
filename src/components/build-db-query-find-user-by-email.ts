"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import Component from "./component"

export default class BuildDbQueryFindUserByEmail extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Builds a query to find the user by their email address in the dbase.
   *
   * in: context.domain.user
   * out: context.dbquery
   * onFail: FailHandler
   * onNext: NextHandler
  */
  public execute(req: express.Request, res: express.Response): void {
    // console.log("BuildDbQueryFindUserByEmail::EXECUTE")
    return
  }
}
