"use strict"

import * as awilix from "awilix"
import NextHandler from "../handlers/next-handler"
import ResponseHandler from "../handlers/response-handler"
import IPipeline from "../pipeline/i-pipeline"
import IResponder from "../responders/i-responder"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.ResponseHandler]: awilix.asValue({
      create: (responder: IResponder) => new ResponseHandler(responder)
    }),
    [TYPES.NextHandler]: awilix.asValue({
      create: (pipeline: IPipeline) => new NextHandler(pipeline)
    })
  }
}
