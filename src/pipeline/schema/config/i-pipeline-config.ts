import IComponentConfig from "./i-component-config"

export default interface IPipelineConfig {
  name: string
  components: IComponentConfig[]
}
