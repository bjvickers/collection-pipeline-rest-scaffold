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
    // Executes the component: component.execute(context)
    joinPoint.proceed()

    // If here, the the component executed successfully. We will now
    // trigger the 'success handler' attached to the component. Note
    // that 'joinPoint.target' refers to the component object, which
    // is an EventEmitter. We emit a success event, and pass the event
    // handler two arguments: null (which represents a null error), and
    // context (the original context object that was passed to the
    // component prior to execution).
    joinPoint.target.emit(joinPoint.target.getSuccessEvent(), null, joinPoint.args[0])
  } catch (err) {
    // If here then an error occurred during the execution of the component.
    // We will emit an error on the component, which will trigger execution
    // of the fail handler registered to the component. The first arguemnt
    // we pass to the fail handler will be the error object, and the second
    // argument will be the original context object that was passed to
    // the component.
    joinPoint.target.emit(joinPoint.target.getFailEvent(), err, joinPoint.args[0])
  }
}

export default despatchable
