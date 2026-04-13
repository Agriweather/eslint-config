# @agriweather/eslint-config

> 基於 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 擴充

[![NPM version][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE)
[![GitHub Tests Action Status][ico-github-action]][link-github-action]
[![Total Downloads][ico-downloads]][link-downloads]

- 自動修正格式（設計為可**不搭配** Prettier 獨立使用）
- 合理的預設值與最佳實踐，只需一行設定
- 開箱即用，支援 TypeScript、JSX、Vue、JSON、YAML、Toml、Markdown 等
- 風格鮮明，同時[高度可自訂](#自訂)
- 使用 [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)，輕鬆組合！
- 可選支援 [React](https://github.com/antfu/eslint-config#react)、[Svelte](https://github.com/antfu/eslint-config#svelte)、[UnoCSS](https://github.com/antfu/eslint-config#unocss)、[Astro](https://github.com/antfu/eslint-config#astro)、[Solid](https://github.com/antfu/eslint-config#solid)
- 可選支援[格式化工具](https://github.com/antfu/eslint-config#formatters)，用於格式化 CSS、HTML、XML 等
- **風格原則**：易於閱讀、diff 穩定、一致
  - 排序 import、結尾逗號
  - 單引號、無分號
  - 使用 [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic)
- 預設套用 `.gitignore`
- 需要 ESLint v9.5.0+

## 與 @antfu/eslint-config 的差異

- 更多具明確風格主張的規則

## 使用方式

### 安裝

```bash
npm install eslint @agriweather/eslint-config -D
```

### 建立設定檔

在專案根目錄建立 `eslint.config.js`：

```js
// eslint.config.js
import agriweather from '@agriweather/eslint-config'

export default agriweather()
```

### 在 package.json 新增腳本

範例：

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## VS Code 支援（自動修正）

安裝 [VS Code ESLint 擴充套件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

將以下設定加入 `.vscode/settings.json`：

```jsonc
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in your IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "astro",
    "html",
    "markdown",
    "json",
    "json5",
    "jsonc",
    "yaml",
    "toml",
    "xml"
  ]
}
```

## 自訂

也可以個別設定每個整合，例如：

```js
// eslint.config.js
import agriweather from '@agriweather/eslint-config'

export default agriweather({
  // 專案類型。'lib' 代表函式庫，預設為 'app'
  type: 'lib',

  // Flat config 不再支援 `.eslintignore`，請改用 `ignores`
  // 選項（第一個引數）中的 `ignores` 會被視為全域忽略
  // 並會**擴充**設定的預設忽略，而非覆蓋
  // 也可以傳入函式來修改預設忽略
  ignores: [
    '**/fixtures',
    // ...globs
  ],

  // 解析 `.gitignore` 取得忽略清單，預設開啟
  gitignore: true,

  // 啟用風格格式化規則
  stylistic: true,

  // 或自訂風格規則
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  // TypeScript 和 Vue 會自動偵測，也可以明確啟用：
  typescript: true,
  vue: true,

  // 停用 jsonc 和 yaml 支援
  jsonc: false,
  yaml: false,
})
```

`agriweather` 工廠函式也接受任意數量的自訂設定：

```js
// eslint.config.js
import agriweather from '@agriweather/eslint-config'

export default agriweather({
  // agriweather 設定
})
  .append({
    // 也可以附加規則，會與前面的設定合併
    files: ['**/*.ts'],
    rules: {},
  })
  .append({
    // 或覆蓋前一個設定，會被取代
    rules: {},
  })
  .append({
    // 也可以附加設定，會與前一個合併
    files: ['**/*.vue'],
    rules: {},
  })
```

更進階的用法請參考 [@antfu/eslint-config 的自訂說明](https://github.com/antfu/eslint-config#customization)。

## Credit

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@ycs77/eslint-config](https://github.com/ycs77/eslint-config)

## License

Under the [MIT LICENSE](LICENSE)

[ico-version]: https://img.shields.io/npm/v/@agriweather/eslint-config?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen?style=flat-square
[ico-github-action]: https://img.shields.io/github/actions/workflow/status/Agriweather/eslint-config/ci.yml?branch=main&label=tests&style=flat-square
[ico-downloads]: https://img.shields.io/npm/dt/@agriweather/eslint-config?style=flat-square
[link-npm]: https://www.npmjs.com/package/@agriweather/eslint-config
[link-github-action]: https://github.com/Agriweather/eslint-config/actions/workflows/ci.yml?query=branch%3Amain
[link-downloads]: https://www.npmjs.com/package/@agriweather/eslint-config
