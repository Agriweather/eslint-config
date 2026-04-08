import agriweather, { GLOB_TS } from './src'

export default agriweather({
  vue: {
    a11y: true,
  },
  astro: {
    astroExplicitWrapper: true,
  },
  typescript: {
    erasableOnly: true,
  },
  markdown: {
    overrides: {
      'no-dupe-keys': 'off',
    },
  },
  formatters: true,
  type: 'lib',
  ignores: [
    'fixtures',
    '_fixtures',
    '**/constants-generated.ts',
  ],
})
  .append({
    files: [GLOB_TS],
    rules: {
      'style/quote-props': ['error', 'consistent-as-needed'],
    },
  })
