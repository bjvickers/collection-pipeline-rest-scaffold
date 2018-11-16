import IPipeline from "../../pipeline/i-pipeline"
import IComponentConfig from "../../pipeline/schema/config/i-component-config"
import IPipelineConfig from "../../pipeline/schema/config/i-pipeline-config"

export default interface IPipelineBuilder {
  create(config: IPipelineConfig): void
  addComponent(config: IComponentConfig): void
  getResult(): IPipeline
}
