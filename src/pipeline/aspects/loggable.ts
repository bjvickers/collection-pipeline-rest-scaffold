import Component from "../components/component"

/* tslint:disable */
const meld = require("meld")
/* tslint:enable */

const loggable = (component: Component, methodName: string) => {
  meld.before(component, methodName, log)
}

const log = (joinPoint: any) => {
  // @TODO: Implement logging in aspect
}

export default loggable
