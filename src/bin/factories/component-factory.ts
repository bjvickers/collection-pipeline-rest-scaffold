"use strict"

import Component from "../../components/component"
import IComponentConfig from "../../schema/config/i-component-config"

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
