"use strict"

import express as "express"
import AbstractComponent from "./AbstractComponent"
import AbstractComponentConfig from "../config/AbstractComponentConfig"

export default class UserAuthorise extends AbstractComponent {
  public constructor(config: AbstractComponentConfig) {
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
