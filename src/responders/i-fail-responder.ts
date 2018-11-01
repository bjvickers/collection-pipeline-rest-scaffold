"use strict"

import IContext from "../context/i-context"

export default interface IFailResponder {
  handle(err: any, context: IContext): void
}
