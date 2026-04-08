import type { TypedFlatConfigItem } from '../types'

export async function javascript(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: 'agriweather/javascript/rules',
      rules: {
        'unused-imports/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            caughtErrors: 'none',
            ignoreRestSiblings: true,
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
  ]
}
