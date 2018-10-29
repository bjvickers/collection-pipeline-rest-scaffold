"use strict"

import AbstractComponentEventConfig from "./AbstractComponentEventConfig"
import AbstractComponentHandlerConfig from "./AbstractComponentHandlerConfig"
import AbstractComponentResonderConfig from "./AbstractComponentResonderConfig"

export default interface AbstractComponentConfig {
  type: string
  events: AbstractComponentEventConfig
  handlers: AbstractComponentHandlerConfig
  responders: AbstractComponentResponderConfig
}
