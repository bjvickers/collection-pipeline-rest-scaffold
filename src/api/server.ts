"use strict"

import http from "http"
import { AwilixContainer } from "awilix"
import Application from "./application"
import TYPES from "../ioc/types"

export default class Server {
  protected app: Application
  
  public constructor(container: AwilixContainer) {
    this.app = container.resolve(TYPES.Application)
  }
  
  public listen(port: number): void {
    http.createServer(this.app.getRequestListener()).listen(port)
  }
}
