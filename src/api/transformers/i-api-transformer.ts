import express from "express"
import IContext from "../../pipeline/schema/context/i-context"

export default interface IApiTransformer {
  transform(req: express.Request, res: express.Response, pipelineName: string): IContext
}
