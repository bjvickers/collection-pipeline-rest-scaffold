"use strict"

import EventConfig from "./event-config"
import HandlerConfig from "./handler-config"
import ResponderConfig from "./responder-config"

export default interface ComponentConfig {
  type: string
  events: EventConfig
  handlers: HandlerConfig
  responders: ResponderConfig
}
