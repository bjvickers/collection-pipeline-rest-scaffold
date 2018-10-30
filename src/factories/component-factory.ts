"use strict"

import Component from "../components/component"
import IComponentConfig from "../config/i-component-config"
import TYPES from "../ioc/types"

export default class ComponentFactory {
  protected inject: any

  public constructor(inject: any) {
    this.inject = inject
  }

  public create(config: IComponentConfig): Component {
    const factory: { create: (config: IComponentConfig) => Component } = this.inject[config.type]
    return factory.create(config)
  }
}
