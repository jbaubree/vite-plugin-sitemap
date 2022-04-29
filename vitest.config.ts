/// <reference types="vitest" />

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [{
    name: 'config',
    config: () => ({
      test: { setupFiles: ['test/setup.ts'] },
    }),
  }],
})
