import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import Pages from 'vite-plugin-pages'

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
    }),
    Pages(),
  ],
})

export default config
