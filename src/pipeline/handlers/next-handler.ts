import IPipeline from "../i-pipeline"
import IContext from "../schema/context/i-context"
import IHandler from "./i-handler"

/**
 * Triggers the next component in the pipeline.
 */
export default class NextHandler implements IHandler {
  protected pipeline: IPipeline

  public constructor(pipeline: IPipeline) {
    this.pipeline = pipeline
  }

  public handle(err: any, context: IContext): void {
    this.pipeline.next(context)
  }
}
