"use strict"

/**
 * This is the composition root for dependency injection
 */
import * as awilix from "awilix"
import appDependencies from "./compose-app"
import componentDependencies from "./compose-components"
import dataDependencies from "./compose-data"
import factoryDependencies from "./compose-factories"
import handlerDependencies from "./compose-handlers"
import modelDependencies from "./compose-models"
import pipelineDependencies from "./compose-pipeline"
import responderDependencies from "./compose-responders"
import serverDependencies from "./compose-server"

let container: awilix.AwilixContainer | null

export default function () {
  if (container) return container

  // @TODO: Change to InjectionMode.CLASSIC
  container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
  })

  container.register(dataDependencies())
  container.register(serverDependencies())
  container.register(appDependencies())
  container.register(pipelineDependencies())
  container.register(handlerDependencies())
  container.register(responderDependencies())
  container.register(modelDependencies())
  container.register(componentDependencies())
  container.register(factoryDependencies())
  return container
}
