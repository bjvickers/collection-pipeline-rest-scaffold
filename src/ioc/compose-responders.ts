"use strict"

import * as awilix from "awilix"
import Responder200 from "../api/responders/responder-200"
import Responder201 from "../api/responders/responder-201"
import Responder400 from "../api/responders/responder-400"
import Responder401 from "../api/responders/responder-401"
import Responder404 from "../api/responders/responder-404"
import Responder409 from "../api/responders/responder-409"
import Responder500 from "../api/responders/responder-500"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.Responder400]: awilix.asClass(Responder400),
    [TYPES.Responder401]: awilix.asClass(Responder401),
    [TYPES.Responder404]: awilix.asClass(Responder404),
    [TYPES.Responder409]: awilix.asClass(Responder409),
    [TYPES.Responder500]: awilix.asClass(Responder500),
    [TYPES.Responder200]: awilix.asClass(Responder200),
    [TYPES.Responder201]: awilix.asClass(Responder201)
  }
}
