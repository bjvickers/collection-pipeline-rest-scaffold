"use strict"

import Component from "../components/component"

/* tslint:disable */
const meld = require("meld")
/* tslint:enable */

const despatchable = (component: Component, methodName: string) => {
  meld.around(component, methodName, despatch)
}

const despatch = (joinPoint: any) => {
  try {
    // Execute the component: component.execute(req, res)
    joinPoint.proceed()

    // Successful execute.
    joinPoint.target.emit(joinPoint.target.getSuccessEvent(), null, joinPoint.args[0])
  } catch (err) {
    // Failed execute.
    joinPoint.target.emit(joinPoint.target.getFailEvent(), err, joinPoint.args[0])
  }
}

export default despatchable
