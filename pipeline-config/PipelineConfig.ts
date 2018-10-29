"use strict"

import AbstractComponentConfig from "./AbstractComponentConfig"

export default interface PipelineConfig {
  name: string
  components: AbstractComponentConfig[]
}
