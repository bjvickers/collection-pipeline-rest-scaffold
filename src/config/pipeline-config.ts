"use strict"

import ComponentConfig from "./component-config"

export default interface PipelineConfig {
  name: string
  components: ComponentConfig[]
}
