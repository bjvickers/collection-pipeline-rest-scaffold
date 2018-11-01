"use strict"

import express from "express"
import IContext from "../../context/i-context"
import IFinishResponder from "../../responders/i-finish-responder"

export default class FinishResponder201 implements IFinishResponder {
  public handle(err: any, context: IContext): void {
    context.api.outgoing.json({ status: 201 })
  }
}
