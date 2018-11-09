"use strict"

import * as awilix from "awilix"
import IServer from "../../api/server/i-server"
import Server from "../../api/server/server"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.IServer]: awilix.asClass(Server)
  }
}
