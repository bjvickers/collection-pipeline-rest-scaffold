"use strict"

import IContext from "../context/i-context"

export default interface IResponder {
  handle(err: any, context: IContext): void
}
