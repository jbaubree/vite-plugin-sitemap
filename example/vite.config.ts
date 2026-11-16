import { fileURLToPath } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import { getRoutesFromTypedRouter } from 'sitemap-ts'
import { defineConfig } from 'vite'
import Sitemap from 'vite-plugin-sitemap'
import VueRouter from 'vue-router/vite'

const names = [
  'John',
  'Bryce',
  'Addison',
  'Dana',
]
const typedRouterFile = fileURLToPath(new URL('./typed-router.d.ts', import.meta.url))

const config = defineConfig({
  plugins: [
    VueRouter({
      routesFolder: 'src/pages',
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Sitemap({
      hostname: 'http://www.test.com',
      readable: true,
      dynamicRoutes: [
        ...getRoutesFromTypedRouter(typedRouterFile),
        ...names.map(name => `/names/${name}`),
      ],
      exclude: ['/names/John'],
    }),
  ],
})

export default config
