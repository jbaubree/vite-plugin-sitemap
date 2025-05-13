# vite-plugin-sitemap

[![npm version](https://badgen.net/npm/v/vite-plugin-sitemap)](https://www.npmjs.com/package/vite-plugin-sitemap)
[![monthly downloads](https://badgen.net/npm/dm/vite-plugin-sitemap)](https://www.npmjs.com/package/vite-plugin-sitemap)
[![types](https://badgen.net/npm/types/vite-plugin-sitemap)](https://github.com/jbaubree/vite-plugin-sitemap/blob/main/src/types.ts)
[![license](https://badgen.net/npm/license/vite-plugin-sitemap)](https://github.com/jbaubree/vite-plugin-sitemap/blob/main/LICENSE)
[![CI](https://github.com/jbaubree/vite-plugin-sitemap/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jbaubree/vite-plugin-sitemap/actions/workflows/ci.yml)

> Sitemap generator plugin for Vite using [sitemap-ts](https://github.com/jbaubree/sitemap-ts).

> This plugin scans your dist folder next build to generate sitemap.xml and robots.txt files.

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
    Sitemap({ hostname: 'https://example.com' }),
  ],
}
```

Now, run `npm build` and this will generate sitemap.xml and robots.txt files on your dist folder.

### To generate all pages of your app, you can:

- Use dynamicRoutes to send routes paths.
- Read [`MPA docs`](https://vitejs.dev/guide/build.html#multi-page-app) from Vite documentation.
- Use MPA with [`vite-plugin-mpa`](https://github.com/IndexXuan/vite-plugin-mpa).

## Configuration options

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

### exclude

- **Type:** `string[]`
- **Default:** `[]`

Array of strings with excluded routes.

```js
export default {
  plugins: [
    Vue(),
    Sitemap({ exclude: ['/admin', '/private'] }),
  ],
}
```

You can find a working example in example folder.

### externalSitemaps

- **Type:** `string[]`
- **Default:** `[]`

Array of strings with other sitemaps paths or urls.

```js
generateSitemap({
  externalSitemaps: ['sitemap_1', 'sitemap_2', 'subpath/sitemap_3', 'https://site.com/sitemap.xml']
})
```

### outDir

- **Type:** `string`
- **Default:** `'dist'`

Output directory.

### extensions

- **Type:** `string | string[]`
- **Default:** `'html'`

File extensions that need to be generated.
Example: ['html', 'md']

### changefreq

- **Type:** `string | RoutesOptionMap<string>`
- **Default:** `'daily'`

Change frequency option for sitemap.

### priority

- **Type:** `number | RoutesOptionMap<number>`
- **Default:** `1`

Priority option for sitemap.

### lastmod

- **Type:** `Date | RoutesOptionMap<Date>`
- **Default:** `new Date()`

Last modification option for sitemap.

### RoutesOptionMap\<Type>

- **Type:** `{ [route: string]: Type }`

Used for changing `changefreq`, `priority`, or `lastmod` on a by-route level.
The (optional) route `'*'` is used as default.

### readable

- **Type:** `boolean`
- **Default:** `false`

Converts XML into a human readable format

### i18n

- **Type:** `{ defaultLanguage?: string, languages: string[], strategy?: 'suffix' | 'prefix' }`
- **Default:** `undefined, strategy: 'suffix'`

Add i18n support defining alternate links.
defaultLanguage will use this language with / and languages with /language.
strategy specifies if the language code is a suffix to the path or a prefix. 'suffix' is default. Example: http://localhost/mypage/en or http://localhost/en/mypage

### generateRobotsTxt

- **Type:** `boolean`
- **Default:** `true`

Enables robots.txt file generation

### xmlns

- **Type:** `NSArgs`
- **Default:** `undefined`

Trim the xml namespace
See https://www.npmjs.com/package/sitemap#options-you-can-pass
Type: https://github.com/ekalinin/sitemap.js/blob/0af656e6a4a7b1403c9b3af23603261bd9cf94d3/lib/sitemap-stream.ts#L20

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
