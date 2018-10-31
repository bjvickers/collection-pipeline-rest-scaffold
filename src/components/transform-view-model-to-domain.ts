"use strict"

import express from "express"
import IComponentConfig from "../config/i-component-config"
import Component from "./component"

export default class TransformViewModelToDomain extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * Transforms Context.viewmodel data to Context.domain model(s)
   *
   * in: context.viewmodel
   * out: context.domain
   * onFail: FailHandler
   * oonNext: NextHandler
  */
  public execute(req: express.Request, res: express.Response): void {
    // console.log("TransformViewModelToDomain::EXECUTE")
    return
  }
}
