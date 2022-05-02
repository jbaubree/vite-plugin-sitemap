import type { Plugin } from 'vite'
import type { UserOptions } from 'sitemap-ts'
import { generateSitemap } from 'sitemap-ts'

function sitemapPlugin(options: UserOptions = {}): Plugin {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      generateSitemap(options)
    },
    transformIndexHtml() {
      return [
        {
          tag: 'link',
          injectTo: 'head',
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
