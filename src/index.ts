import type { Plugin } from 'vite'
import type { UserOptions } from 'sitemap-ts'
import { generateSitemap } from 'sitemap-ts'

function sitemapPlugin(options: UserOptions = {}): Plugin {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      generateSitemap(options)
    },
  }
}

export default sitemapPlugin
