import express from "express"
import IController from "./i-controller"

export default interface IRegistrationController extends IController {
  post(req: express.Request, res: express.Response, next: express.NextFunction): void
}
