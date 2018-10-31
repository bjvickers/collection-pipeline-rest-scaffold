"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import Component from "./component"

export default class UserAuthorise extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
  */
  public execute(req: express.Request, res: express.Response): void {
    // console.log("USERAUTHORISE::EXECUTE")
    return
  }
}
