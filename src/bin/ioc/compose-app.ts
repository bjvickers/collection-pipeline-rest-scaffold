import * as awilix from "awilix"
import Application from "../../api/application/application"
import RegistrationController from "../../api/controllers/registration-controller"
import RegistrationTransformer from "../../api/transformers/registration-transformer"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.IApplication]: awilix.asClass(Application),
    [TYPES.RegistrationTransformer]: awilix.asClass(RegistrationTransformer),
    [TYPES.IRegistrationController]: awilix.asClass(RegistrationController)
  }
}
