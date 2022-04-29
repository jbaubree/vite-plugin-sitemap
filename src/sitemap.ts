import { join, parse } from 'path'
import { slash } from '@antfu/utils'
import glob from 'fast-glob'

import type { ResolvedOptions } from './types'

export function getRoutes(options: ResolvedOptions) {
  return [
    ...glob.sync('**/*.html', { cwd: options.outDir }).map((route) => {
      const parsedRoute = parse(route.replace(/index\.html/g, ''))
      return (
        slash(join('/', parsedRoute.dir, parsedRoute.name))
      )
    }),
    ...options.dynamicRoutes.map(route => slash(join('/', join(parse(route).dir, parse(route).name)))),
  ]
}

export function getFormattedSitemap(options: ResolvedOptions, routes: string[]) {
  return routes.map(route => ({
    url: new URL(route, options.hostname).href,
    changefreq: options.changefreq,
    priority: options.priority,
    lastmod: options.lastmod,
  }))
}
