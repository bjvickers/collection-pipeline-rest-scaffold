"use strict"

import express from "express"
import IContext from "../../context/i-context"
import IFailResponder from "../../responders/i-fail-responder"

export default class FailResponder409 implements IFailResponder {
  // @TODO: Update responder to return responses consistent with the
  // @TODO: OpenAPI spec.
  public handle(err: any, context: IContext): void {
    context.api.outgoing.status(409).json({ message: err.message })
  }
}
