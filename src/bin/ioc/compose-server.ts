"use strict"

import * as awilix from "awilix"
import Server from "../../api/server/server"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.Server]: awilix.asClass(Server)
  }
}
