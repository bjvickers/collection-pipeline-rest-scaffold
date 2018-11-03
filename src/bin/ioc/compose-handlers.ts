"use strict"

import * as awilix from "awilix"
import NextHandler from "../../pipeline/handlers/next-handler"
import ResponseHandler from "../../pipeline/handlers/response-handler"
import IPipeline from "../../pipeline/i-pipeline"
import IResponder from "../../pipeline/responders/i-responder"
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
