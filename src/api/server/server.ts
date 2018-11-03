"use strict"

import http from "http"
import TYPES from "../../bin/ioc/types"
import Application from "../application/application"

export default class Server {
  protected app: Application

  public constructor(inject: any) {
    this.app = inject[TYPES.Application]
  }

  public listen(port: number): void {
    http.createServer(this.app.getRequestListener()).listen(port)
  }
}
