"use strict"

import * as awilix from "awilix"
import getUserPipeline from "../data/get-user-pipeline.json"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.GetUserPipeline]: awilix.asValue(getUserPipeline)
  }
}
