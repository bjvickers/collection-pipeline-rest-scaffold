"use strict"

import { AwilixContainer } from "awilix"
import http from "http"
import TYPES from "../../ioc/types"
import Application from "../application/application"

export default class Server {
  protected app: Application

  public constructor(container: AwilixContainer) {
    this.app = container.resolve(TYPES.Application)
  }

  public listen(port: number): void {
    http.createServer(this.app.getRequestListener()).listen(port)
  }
}
