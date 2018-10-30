"use strict"

import * as awilix from "awilix"
import FailResponder404 from "../api/responders/fail-responder-404"
import FinishResponder200 from "../api/responders/finish-responder-200"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.FailResponder404]: awilix.asClass(FailResponder404),
    [TYPES.FinishResponder200]: awilix.asClass(FinishResponder200)
  }
}
