"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import User from "../models/user"
import Component from "./component"

export default class UserValidate extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement @Log()
   */
  public execute(req: express.Request, res: express.Response): void {
    // @TODO: How to inject userfactory - constructor or context?
    // const user: IUser = this.container.resolve(TYPES.UserFactory).createUser()
    // user.update(pipeline.getContext().request.userData)
    // console.log("USERVALIDATE::EXECUTE")
    return
  }
}
