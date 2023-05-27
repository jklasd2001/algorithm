import { resolve } from 'path'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: [{ find: 'src', replacement: resolve('src') }],
  },
})
