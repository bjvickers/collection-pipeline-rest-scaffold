"use strict"

import IContext from "../schema/context/i-context"

export default interface IResponder {
  handle(err: any, context: IContext): void
}
