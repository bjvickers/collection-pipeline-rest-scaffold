"use strict"

import express as "express"
import AbstractComponent from "./AbstractComponent"
import AbstractComponentConfig from "../config/AbstractComponentConfig"
import User from "../models/User"

export default class UserValidate extends AbstractComponent {
  public constructor(config: AbstractComponentConfig) {
    super(config)
  }
  
  /*
   * @TODO: implement before/after aspect binding
   * @TODO: implement @Log()
   */
  public execute(req: express.Request, res: express.Response): void {
    // @TODO: How to inject userfactory - constructor or context?
    // const user: IUser = this.container.resolve(TYPES.UserFactory).createUser()
    // user.update(pipeline.getContext().request.userData)
  }
}
