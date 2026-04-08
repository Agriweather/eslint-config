import type { TypedFlatConfigItem } from '../types'
import { GLOB_TESTS } from '@antfu/eslint-config'

export async function test(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      files: GLOB_TESTS,
      name: 'agriweather/test/rules',
      rules: {
        'test/consistent-test-it': 'off',
        'test/prefer-lowercase-title': 'off',
      },
    },
  ]
}
