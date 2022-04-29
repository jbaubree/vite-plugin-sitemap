# vite-plugin-sitemap

[![npm version](https://badgen.net/npm/v/vite-plugin-sitemap)](https://www.npmjs.com/package/vite-plugin-sitemap)
[![monthly downloads](https://badgen.net/npm/dm/vite-plugin-sitemap)](https://www.npmjs.com/package/vite-plugin-sitemap)
[![types](https://badgen.net/npm/types/vite-plugin-sitemap)](https://github.com/jbaubree/vite-plugin-sitemap/blob/main/src/types.ts)
[![license](https://badgen.net/npm/license/vite-plugin-sitemap)](https://github.com/jbaubree/vite-plugin-sitemap/blob/main/LICENSE)
[![CI](https://github.com/jbaubree/vite-plugin-sitemap/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jbaubree/vite-plugin-sitemap/actions/workflows/ci.yml)

> Sitemap generator plugin for Vite

## Getting Started

### Vue

Install:

```bash
npm install -D vite-plugin-sitemap
```

### Vite config

Add to your `vite.config.js`:

```js
import Sitemap from 'vite-plugin-sitemap'

export default {
  plugins: [
    Vue(),
    Sitemap(),
  ],
}
```

Now, run `npm build` and this will generate sitemap.xml and robots.txt files on your dist folder.

### hostname

- **Type:** `string`
- **Default:** `'http://localhost/'`

Base URI.

### dynamicRoutes

- **Type:** `string[]`
- **Default:** `[]`

Array of strings with manual dynamic routes.
```js
const names = [
  'John',
  'Bryce',
  'Addison',
  'Dana',
]
const dynamicRoutes = names.map(name => `/names/${name}`)

export default {
  plugins: [
    Vue(),
    Sitemap({ dynamicRoutes }),
  ],
}
```

You can find a working example in example folder.

### outDir

- **Type:** `string`
- **Default:** `'dist'`

Output directory.

### changefreq

- **Type:** `string`
- **Default:** `'daily'`

Change frequency option for sitemap.

### priority

- **Type:** `number`
- **Default:** `1`

Priority option for sitemap.

### lastmod

- **Type:** `Date`
- **Default:** `new Date()`

Last modification option for sitemap.

### readable

- **Type:** `boolean`
- **Default:** `false`

Converts XML into a human readable format

### robots

- **Type:** `RobotOption[]`
- **Default:** `[{ userAgent: '*', allow: '/' }]`

RobotOption:
- **userAgent**: `string`
- **allow**?: `string | string[]`
- **disallow**?: `string | string[]`
- **crawlDelay**?: `number`
- **cleanParam**?: `string`

## License

MIT License © 2022 [jbaubree](https://github.com/jbaubree)
