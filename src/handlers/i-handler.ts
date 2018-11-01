"use strict"

import IContext from "../context/i-context"

export default interface IHandler {
  handle(err: any, context: IContext): void
}
