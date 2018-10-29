"use strict"

import awilix = require("awilix")
import User from "../models/User"
import TYPES from "./TYPES"

export default function () {
  return {
    TYPES.User: awilix.asClass(User)
  }
}
