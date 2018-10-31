"use strict"

import IUser from "../models/i-user"

export default interface IModels {
  session: any
  view: any
  domain: IUser
  db: any
}
