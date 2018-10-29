"use strict"

import awilix = require("awilix")
import Server from "../server/Server"
import TYPES from "./TYPES"

export default function () {
  return {
    TYPES.Server: awilix.asClass(Server)
  }
}
