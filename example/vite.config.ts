import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Sitemap from 'vite-plugin-sitemap'

const names = [
  'John',
  'Bryce',
  'Addison',
  'Dana',
]
const dynamicRoutes = names.map(name => `/names/${name}`)

const config = defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Sitemap({
      hostname: 'http://www.test.com',
      readable: true,
      dynamicRoutes,
      exclude: ['/names/John'],
    }),
    Pages(),
  ],
})

export default config
