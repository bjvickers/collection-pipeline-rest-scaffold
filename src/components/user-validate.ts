"use strict"

import express from "express"
import Component from "./component"
import ComponentConfig from "../config/component-config"
import User from "../models/user"

export default class UserValidate extends Component {
  public constructor(config: ComponentConfig) {
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
