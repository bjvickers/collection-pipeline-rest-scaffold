// @TODO: Optimise pino performance with pino-extreme
import pino = require("pino")

// @TODO: Retrieve properties from config and set here
const infraLogger: pino.Logger = pino()

// @TODO: Retrieve properties from config and set here
const domainLogger: pino.Logger = infraLogger.child({
  name: "domain"
})

export { infraLogger, domainLogger }
