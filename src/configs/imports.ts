import type { TypedFlatConfigItem } from '../types'

export async function imports(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: 'agriweather/imports/rules',
      rules: {
        'antfu/no-import-dist': 'off',
      },
    },
  ]
}
