import * as awilix from "awilix"
import Application from "../../api/application/application"
import HelloWorldController from "../../api/controllers/hello-world-controller"
import RegistrationController from "../../api/controllers/registration-controller"
import HelloWorldTransformer from "../../api/transformers/hello-world-transformer"
import RegistrationTransformer from "../../api/transformers/registration-transformer"
import TYPES from "./types"

export default function() {
  return {
    [TYPES.IApplication]: awilix.asClass(Application),
    [TYPES.RegistrationTransformer]: awilix.asClass(RegistrationTransformer),
    [TYPES.IRegistrationController]: awilix.asClass(RegistrationController),
    [TYPES.HelloWorldTransformer]: awilix.asClass(HelloWorldTransformer),
    [TYPES.IHelloWorldController]: awilix.asClass(HelloWorldController)
  }
}
