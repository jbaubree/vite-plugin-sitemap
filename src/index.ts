import type { UserOptions } from 'sitemap-ts'
import { generateSitemap } from 'sitemap-ts'

type VueRoutes = Array<any>



function sitemapPlugin(options: UserOptions = {}, vueRoutes?: VueRoutes) {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      if (vueRoutes) {
        const dynamicVueRoutes = convertVueRoutesToDynamicRoutes(vueRoutes);
        if (options.dynamicRoutes) {
          options.dynamicRoutes = [...new Set([...options.dynamicRoutes, ...dynamicVueRoutes])];
        } else {
          options.dynamicRoutes = dynamicVueRoutes;
        }
      }
      generateSitemap(options)
    },
    transformIndexHtml() {
      return [
        {
          tag: 'link',
          injectTo: 'head' as 'head' | 'body' | 'head-prepend' | 'body-prepend' | undefined,
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

function convertVueRoutesToDynamicRoutes (routes: VueRoutes) {
  let routeArray: Array<string> = [];
  const processPaths = (r: any, prefix?: string) => {
    for (let route of r) {
      const sitemapConfig = route?.meta?.sitemap || {};
      if (sitemapConfig.ignore) {
        continue;
      }
      if (sitemapConfig.paths) {
        routeArray = [...routeArray, ...sitemapConfig.paths];
      } else if (route.path !== '/') {
        routeArray.push(`${prefix ? `${prefix}/` : ''}${route.path}`);
      }
      if (route.children) {
        processPaths(route.children, route.path);
      }
    }
    return routeArray;
  };
  return processPaths(routes);
}

export default sitemapPlugin
