import { existsSync, readFileSync } from 'fs'
import { describe, expect, test } from 'vitest'

import { generateSitemap } from '../src'
import { generateTestFiles } from './utils'
import { ROBOTS_FILE, SITEMAP_FILE, TEST_OPTION_1, TEST_OPTION_2 } from './variables'

describe('Index', () => {
  test('Generate sitemap', async () => {
    expect(existsSync(SITEMAP_FILE)).toBe(false)
    expect(existsSync(ROBOTS_FILE)).toBe(false)

    generateSitemap()

    expect(existsSync(SITEMAP_FILE)).toBe(false)
    expect(existsSync(ROBOTS_FILE)).toBe(true)

    generateTestFiles()

    generateSitemap({ robots: TEST_OPTION_1 })
    expect(readFileSync(ROBOTS_FILE).toString('utf-8')).toEqual(
      'User-agent: *\nAllow: /\n\nSitemap: http://localhost/sitemap.xml',
    )

    generateSitemap({ hostname: 'https://test.com/', robots: TEST_OPTION_2, readable: true })
    expect(readFileSync(ROBOTS_FILE).toString('utf-8')).toEqual(
      'User-agent: *\nAllow: /\nUser-agent: Googlebot\nAllow: /admin\nDisallow: /disallow\nDisallow: /test\nCrawl-delay: 10\n\nSitemap: https://test.com/sitemap.xml',
    )
  })
})
