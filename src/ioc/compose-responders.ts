"use strict"

import * as awilix from "awilix"
import FailResponder400 from "../api/responders/fail-responder-400"
import FailResponder401 from "../api/responders/fail-responder-401"
import FailResponder404 from "../api/responders/fail-responder-404"
import FailResponder409 from "../api/responders/fail-responder-409"
import FailResponder500 from "../api/responders/fail-responder-500"
import FinishResponder200 from "../api/responders/finish-responder-200"
import FinishResponder201 from "../api/responders/finish-responder-201"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.FailResponder400]: awilix.asClass(FailResponder400),
    [TYPES.FailResponder401]: awilix.asClass(FailResponder401),
    [TYPES.FailResponder404]: awilix.asClass(FailResponder404),
    [TYPES.FailResponder409]: awilix.asClass(FailResponder409),
    [TYPES.FailResponder500]: awilix.asClass(FailResponder500),
    [TYPES.FinishResponder200]: awilix.asClass(FinishResponder200),
    [TYPES.FinishResponder201]: awilix.asClass(FinishResponder201)
  }
}
