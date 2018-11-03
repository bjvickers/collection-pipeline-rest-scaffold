"use strict"

import IContext from "../schema/context/i-context"

/**
 * Event handlers attached to the pipeline components should implement
 * this interface.
 */
export default interface IHandler {
  handle(err: any, context: IContext): void
}
