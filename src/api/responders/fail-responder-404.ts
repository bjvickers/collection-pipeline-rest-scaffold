"use strict"

import express from "express"
import IContext from "../../context/i-context"
import IFailResponder from "../../responders/i-fail-responder"

export default class FailResponder404 implements IFailResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.json({ status: 404, message: err.message })
  }
}
