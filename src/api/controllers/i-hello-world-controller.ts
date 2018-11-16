import express from "express"
import IController from "./i-controller"

export default interface IHelloWorldController extends IController {
  get(req: express.Request, res: express.Response, next: express.NextFunction): void
}
