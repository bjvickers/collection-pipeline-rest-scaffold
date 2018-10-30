"use strict"

import * as awilix from "awilix"
import FailHandler from "../handlers/fail-handler"
import FinishHandler from "../handlers/finish-handler"
import NextHandler from "../handlers/next-handler"
import IPipeline from "../pipeline/i-pipeline"
import IFailResponder from "../responders/i-fail-responder"
import IFinishResponder from "../responders/i-finish-responder"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.FailHandler]: awilix.asValue({
      create: (responder: IFailResponder) => new FailHandler(responder)
    }),
    [TYPES.FinishHandler]: awilix.asValue({
      create: (responder: IFinishResponder) => new FinishHandler(responder)
    }),
    [TYPES.NextHandler]: awilix.asValue({
      create: (pipeline: IPipeline) => new NextHandler(pipeline)
    })
  }
}
