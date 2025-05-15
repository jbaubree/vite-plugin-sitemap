import type { UserOptions } from 'sitemap-ts'
import { generateSitemap } from 'sitemap-ts'

function sitemapPlugin(options: UserOptions = {}) {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      generateSitemap(options)
    },
    transformIndexHtml() {
      return [
        {
          tag: 'link',
          injectTo: 'head' as 'head' | 'body' | 'head-prepend' | 'body-prepend',
          attrs: {
            rel: 'sitemap',
            type: 'application/xml',
            title: 'Sitemap',
            href: '/sitemap.xml',
          },
        },
      ]
    },
  }
}

export default sitemapPlugin
