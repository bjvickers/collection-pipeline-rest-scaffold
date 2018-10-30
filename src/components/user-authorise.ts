"use strict"

import express from "express"
import Component from "./component"
import ComponentConfig from "../config/component-config"

export default class UserAuthorise extends Component {
  public constructor(config: ComponentConfig) {
    super(config)
  }
  
  /*
   * @TODO: implement before/after aspect binding
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
  */
  public execute(req: express.Request, res: express.Response): void {
    console.log('UserAuthorise.execute not yet implemented')
  }
}
