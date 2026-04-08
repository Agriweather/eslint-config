import fs from 'node:fs/promises'
import { agriweather } from '../src/factory'

const configs = await agriweather({
  imports: true,
  markdown: true,
  stylistic: true,
  test: true,
  typescript: true,
  vue: true,
})

const configNames = configs
  .map(i => i.name)
  .filter(Boolean)
  .filter(i => i?.startsWith('agriweather/')) as string[]

const dts = `
// Names of all the configs
export type ConfigNames = ${configNames.map(i => `'${i}'`).join(' | ')}
`

await fs.writeFile('src/typegen.d.ts', dts)
