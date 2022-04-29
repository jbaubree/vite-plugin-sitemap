import { describe, expect, test } from 'vitest'
import { resolveOptions } from '../src/options'

describe('Options', () => {
  test('resolve options', () => {
    expect(resolveOptions({})).toMatchInlineSnapshot({
      lastmod: expect.any(Date),
    }, `
      {
        "changefreq": "daily",
        "dynamicRoutes": [],
        "hostname": "http://localhost/",
        "lastmod": Any<Date>,
        "outDir": "dist",
        "priority": 1,
        "readable": false,
        "robots": [
          {
            "allow": "/",
            "userAgent": "*",
          },
        ],
      }
    `)
  })

  test('resolve options with policies', () => {
    expect(resolveOptions({
      robots: [{
        userAgent: '*',
        allow: '/',
        disallow: '/some-path',
        crawlDelay: 10,
      },
      {
        userAgent: 'GoogleBot',
        allow: ['/', '/some-path'],
        disallow: ['/disabled-path', '/another-disabled-path'],
        crawlDelay: 10,
      }],
    })).toMatchInlineSnapshot({
      lastmod: expect.any(Date),
    }, `
      {
        "changefreq": "daily",
        "dynamicRoutes": [],
        "hostname": "http://localhost/",
        "lastmod": Any<Date>,
        "outDir": "dist",
        "priority": 1,
        "readable": false,
        "robots": [
          {
            "allow": "/",
            "crawlDelay": 10,
            "disallow": "/some-path",
            "userAgent": "*",
          },
          {
            "allow": [
              "/",
              "/some-path",
            ],
            "crawlDelay": 10,
            "disallow": [
              "/disabled-path",
              "/another-disabled-path",
            ],
            "userAgent": "GoogleBot",
          },
        ],
      }
    `)
  })
})
