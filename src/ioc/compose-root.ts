"use strict"

/**
 * This is the composition root for dependency injection
 */
const awilix = require("awilix")
import app from "./compose-app"
import builders from "./compose-builders"
import components from "./compose-components"
import datas from "./compose-data"
import factories from "./compose-factories"
import handlers from "./compose-handlers"
import models from "./compose-models"
import pipeline from "./compose-pipeline"
import responders from "./compose-responders"
import servers from "./compose-server"

let container: any

export default function() {
  if (container) { return container }

  container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
  })

  container.register(app())
  container.register(builders())
  container.register(components())
  container.register(datas())
  container.register(factories())
  container.register(handlers())
  container.register(models())
  container.register(pipeline())
  container.register(responders())
  container.register(servers())
  return container
}
