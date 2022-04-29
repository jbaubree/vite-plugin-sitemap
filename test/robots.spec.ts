import { describe, expect, test } from 'vitest'

import { getContent, getFinalSitemapPath, getRules } from '../src/robots'
import { TEST_OPTION_1, TEST_OPTION_2, TEST_RULES_1, TEST_RULES_2 } from './variables'

describe('Robots', () => {
  test('Get rules', async () => {
    expect(getRules([])).toEqual([])
    expect(getRules(TEST_OPTION_1)).toEqual(TEST_RULES_1)
    expect(getRules(TEST_OPTION_2)).toEqual(TEST_RULES_2)
  })

  test('Get content', async () => {
    expect(getContent([], 'http//localhost/')).toEqual('\n\nSitemap: http//localhost/sitemap.xml')
    expect(getContent(TEST_RULES_1, 'http//localhost/')).toEqual('User-agent: *\nAllow: /\n\nSitemap: http//localhost/sitemap.xml')
    expect(getContent(TEST_RULES_2, 'http//localhost/')).toEqual('User-agent: *\nAllow: /\nUser-agent: Googlebot\nAllow: /admin\nDisallow: /disallow\nDisallow: /test\nCrawl-delay: 10\n\nSitemap: http//localhost/sitemap.xml')
  })

  test('Get final sitemap path', async () => {
    expect(getFinalSitemapPath('http://localhost/')).toEqual(
      'http://localhost/sitemap.xml',
    )
    expect(getFinalSitemapPath('http://test.com')).toEqual(
      'http://test.com/sitemap.xml',
    )
  })
})
