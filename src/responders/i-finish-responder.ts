"use strict"

import IContext from "../context/i-context"

export default interface IFinishResponder {
  handle(err: any, context: IContext): void
}
