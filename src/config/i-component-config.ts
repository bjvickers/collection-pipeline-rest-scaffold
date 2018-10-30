"use strict"

import IEventConfig from "./i-event-config"
import IHandlerConfig from "./i-handler-config"
import IResponderConfig from "./i-responder-config"

export default interface IComponentConfig {
  type: string
  events: IEventConfig
  handlers: IHandlerConfig
  responders: IResponderConfig
}
