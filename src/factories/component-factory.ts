"use strict"

import { AwilixContainer } from "awilix"
import Component from "../components/component"
import IComponentConfig from "../config/i-component-config"
import TYPES from "../ioc/types"

export default class ComponentFactory {
  protected container: AwilixContainer

  public constructor(container: AwilixContainer) {
    this.container = container
  }

  public create(config: IComponentConfig): Component {
    const factory: { create: (config: IComponentConfig) => Component } = this.container.resolve(config.type)
    return factory.create(config)
  }
}
