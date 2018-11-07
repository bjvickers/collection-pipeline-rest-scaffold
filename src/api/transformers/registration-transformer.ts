import express from "express"
import IContext from "../../pipeline/schema/context/i-context"
import IApiTransformer from "./i-api-transformer"

export default class RegistrationTransformer implements IApiTransformer {
  // @TODO: Implement proper schema transformation
  public transform(req: express.Request, res: express.Response, pipelineName: string): IContext {
    return {
      api: {
        incoming: req,
        outgoing: res
      },
      db: null,
      email: null,
      models: null,
      pipeline: pipelineName
    }
  }
}
