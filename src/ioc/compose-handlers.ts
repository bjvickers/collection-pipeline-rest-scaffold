"use strict"

import * as awilix from "awilix"
import FailHandler from "../handlers/fail-handler"
import FinishHandler from "../handlers/finish-handler"
import NextHandler from "../handlers/next-handler"
import IPipeline from "../pipeline/i-pipeline"
import IResponder from "../responders/i-responder"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.FailHandler]: awilix.asValue({
      create: (responder: IResponder) => new FailHandler(responder)
    }),
    [TYPES.FinishHandler]: awilix.asValue({
      create: (responder: IResponder) => new FinishHandler(responder)
    }),
    [TYPES.NextHandler]: awilix.asValue({
      create: (pipeline: IPipeline) => new NextHandler(pipeline)
    })
  }
}
