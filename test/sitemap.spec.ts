import { describe, expect, test } from 'vitest'

import { resolveOptions } from '../src/options'
import { getFormattedSitemap, getRoutes } from '../src/sitemap'
import { generateTestFiles } from './utils'

describe('Sitemap', () => {
  test('Get routes', async () => {
    expect(getRoutes(resolveOptions({}))).toEqual([])
    expect(getRoutes(resolveOptions({ dynamicRoutes: ['/', 'route', '/route/sub-route'] }))).toEqual([
      '/',
      '/route',
      '/route/sub-route',
    ])

    generateTestFiles()

    expect(getRoutes(resolveOptions({}))).toEqual([
      '/test',
      '/sub-path/deeper-path',
      '/sub-path',
    ])

    expect(getRoutes(resolveOptions({ dynamicRoutes: ['/', 'route', '/route/sub-route'] }))).toEqual([
      '/test',
      '/sub-path/deeper-path',
      '/sub-path',
      '/',
      '/route',
      '/route/sub-route',
    ])
  })

  test('Get formatted sitemap', async () => {
    expect(getFormattedSitemap(resolveOptions({}), [])).toEqual([])
    expect(getFormattedSitemap(resolveOptions({}), ['/route'])).toMatchInlineSnapshot([{
      lastmod: expect.any(Date),
    }], `
      [
        {
          "changefreq": "daily",
          "lastmod": Any<Date>,
          "priority": 1,
          "url": "http://localhost/route",
        },
      ]
    `)
  })
})
