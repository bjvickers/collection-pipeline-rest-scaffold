"use strict"

/**
 * This is the composition root for dependency injection
 */
import { awilix, AwilixContainer } from "awilix"
import serverDependencies from "./compose-server"
import appDependencies from "./compose-app"
import pipelineDependencies from "./compose-pipeline"
import componentDependencies from "./compose-components"
import modelDependencies from "./compose-model"
import factoryDependencies from "./compose-factories"

let container: AwilixContainer = null

export default function () => {
  if (container) return container

  container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
  })

  container.register(appDependencies())
  container.register(pipelineDependencies())
  container.register(modelDependencies())
  container.register(serverDependencies())
  container.register(componentDependencies())
  container.register(factoryDependencies())
  return container
}
