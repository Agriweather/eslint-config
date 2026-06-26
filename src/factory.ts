import type { Awaitable } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { ConfigNames, OptionsConfig, TypedFlatConfigItem } from './types'
import { antfu } from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import {
  imports,
  javascript,
  markdown,
  node,
  stylistic,
  test,
  typescript,
  vue,
} from './configs'

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
]

export function agriweather(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files' | 'ignores'> = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const {
    componentExts = [],
    imports: enableImports = true,
    node: enableNode = true,
    stylistic: enableStylistic = true,
    typescript: enableTypeScript = isPackageExists('typescript'),
    vue: enableVue = VuePackages.some(i => isPackageExists(i)),
  } = options

  options.markdown = options.markdown ?? false

  let composer = antfu(options)

  composer = composer
    .append(javascript())

  if (enableNode) {
    composer = composer.append(node())
  }

  if (enableImports) {
    composer = composer.append(imports())
  }

  if (enableStylistic) {
    composer = composer.append(stylistic())
  }

  if (options.test ?? true) {
    composer = composer.append(test())
  }

  if (enableVue) {
    componentExts.push('vue')
  }

  if (enableTypeScript) {
    composer = composer.append(
      typescript({
        componentExts,
      })
    )
  }

  if (enableVue) {
    composer = composer.append(
      vue({
        stylistic: !!enableStylistic,
        typescript: !!enableTypeScript,
      })
    )
  }

  if (options.markdown) {
    composer = composer.append(
      markdown({
        stylistic: enableStylistic,
      })
    )
  }

  composer = composer.append(...userConfigs as any)

  return composer
}
