"use strict"

import express from "express"
import IContext from "../../context/i-context"
import IFailResponder from "../../responders/i-fail-responder"

export default class FailResponder500 implements IFailResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.json({ status: 500, message: "An application error occurred." })
  }
}
