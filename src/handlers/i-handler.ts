"use strict"

import IContext from "../schema/context/i-context"

export default interface IHandler {
  handle(err: any, context: IContext): void
}
