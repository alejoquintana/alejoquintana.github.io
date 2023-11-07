import { fileURLToPath, URL } from 'node:url'

//const path = require('path')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
      //root: path.resolve(__dirname, 'src'),

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
              //'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),

    }
  }
})
