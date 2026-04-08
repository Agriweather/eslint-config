import type {
  ConfigNames as AntfuConfigNames,
  OptionsConfig as AntfuOptionsConfig,
  Rules as AntfuRules,
  TypedFlatConfigItem as AntfuTypedFlatConfigItem,
} from '@antfu/eslint-config'
import type { ConfigNames as BaseConfigNames } from './typegen'

export type Rules = AntfuRules

export type ConfigNames = AntfuConfigNames | BaseConfigNames

export type TypedFlatConfigItem = AntfuTypedFlatConfigItem

export type OptionsConfig = AntfuOptionsConfig
