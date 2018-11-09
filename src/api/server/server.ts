"use strict"

import http from "http"
import TYPES from "../../bin/ioc/types"
import IApplication from "../application/i-application"
import IServer from "./i-server"

export default class Server implements IServer {
  protected app: IApplication

  public constructor(inject: any) {
    this.app = inject[TYPES.IApplication]
  }

  public listen(port: number): void {
    http.createServer(this.app.getRequestListener()).listen(port)
  }
}
