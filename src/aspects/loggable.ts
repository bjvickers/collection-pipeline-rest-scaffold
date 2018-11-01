"use strict"

import Component from "../components/component"
import { domainLogger } from "../lib/log/logger"

/* tslint:disable */
const meld = require("meld")
/* tslint:enable */

const loggable = (component: Component, methodName: string) => {
  meld.before(component, methodName, log)
}

const log = (joinPoint: any) => {
  domainLogger("Loggable aspect not yet implemented")
}

export default loggable
