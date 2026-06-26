import type {
  ConfigNames as AntfuConfigNames,
  OptionsConfig as AntfuOptionsConfig,
  Rules as AntfuRules,
  TypedFlatConfigItem as AntfuTypedFlatConfigItem,
  OptionsMarkdown,
} from '@antfu/eslint-config'
import type { ConfigNames as BaseConfigNames } from './typegen'

export type Rules = AntfuRules

export type ConfigNames = AntfuConfigNames | BaseConfigNames

export type TypedFlatConfigItem = AntfuTypedFlatConfigItem

export interface OptionsConfig extends AntfuOptionsConfig {
  /**
   * Enable linting for **code snippets** in Markdown and the markdown content itself.
   *
   * For formatting Markdown content, enable also `formatters.markdown`.
   *
   * @default false
   */
  markdown?: boolean | OptionsMarkdown
}
