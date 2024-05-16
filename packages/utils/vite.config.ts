import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'aics-ui-utils',
      fileName: (format) => `aics-ui-utils.${format}.js`,
      formats: ['iife', 'cjs', 'umd', 'es']
    },
    rollupOptions: {
      output: {
        extend: true
      }
    }
  }
})
