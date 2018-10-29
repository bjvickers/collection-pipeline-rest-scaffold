"use strict"

import express from "express"
import { AwilixContainer } from "awilix"
import GetUserController from "./controllers/GetUserController"
import bodyParser from "body-parser"
import helmet from "helmet"
import path from "path"
import middleware from "swagger-express-middleware"
import TYPES from "../ioc/types"

const app: express.Application = express()

export default class Application {
  protected getUserController: GetUserController
  
  public constructor(container: AwilixContainer) {
    this.getUserController = container.resolve(TYPES.GetUserController)
        
    app.use(helmet())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    middleware(
      path.join(__dirname, "..", "Api.yaml"),
      app,
      (err: Error, middlewareIn: middleware.SwaggerMiddleware) => void = this.swaggerify(err, middlewareIn))
  }
  
  protected swaggerify(err: Error, middlewareIn: middleware.SwaggerMiddleware): void {
    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable("case sensitive routing")
    app.enable("strict routing")

    app.use(middlewareIn.metadata())
    app.use(middlewareIn.files(app, {
      apiPath: process.env.SWAGGER_API_SPEC
    }))

    app.use(middlewareIn.parseRequest({
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    }))

    // These two middleware don't have any options (yet)
    app.use(
      middlewareIn.CORS(),
      middlewareIn.validateRequest())
    
    this.addRoutes()
    this.addErrorFailover()
  }
  
  protected addRoutes(): void {
    app.use("/api/v1/user", this.getUserController.createRouter())
  }
  
  protected addErrorFailover(): void {
    app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction): void => {
      res.status(err.status)
      res.send(
        "<h1>" + err.status + " Error</h1>" +
        "<pre>" + err.message + "</pre>"
      )
    })
  }
  
  public getRequestListener(): Function {
    return app
  }
}
