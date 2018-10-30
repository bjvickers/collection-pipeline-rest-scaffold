"use strict"

import bodyParser from "body-parser"
import express from "express"
import helmet from "helmet"
import path from "path"
import middleware from "swagger-express-middleware"
import TYPES from "../../ioc/types"
import GetUserController from "../controllers/get-user-controller"

const app: express.Application = express()

export default class Application {
  protected getUserController: GetUserController

  public constructor(inject: any) {
    this.getUserController = inject[TYPES.GetUserController]
    app.use(helmet())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    // @TODO: Move the spec file path string into configuration
    middleware(
      path.join(__dirname, "..", "spec", "api.yaml"),
      app,
      (err: Error, middlewareIn: middleware.SwaggerMiddleware): void => this.swaggerify(err, middlewareIn))
  }

  public getRequestListener(): express.Application {
    return app
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
    // @TODO: Formalise an appropriate error strategy
    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
      res.json({ status: 500, message: "An error occurred" })
    })
  }
}
