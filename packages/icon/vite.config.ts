import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'aics-ui-icon',
      fileName: (format) => `aics-ui-icon.${format}.js`,
      formats: ['iife', 'cjs', 'umd', 'es']
    },
    rollupOptions: {
      output: {
        extend: true
      }
    }
  },
  plugins: [vue()]
})
