import * as awilix from "awilix"
import User from "../../models/user"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.User]: awilix.asClass(User)
  }
}
