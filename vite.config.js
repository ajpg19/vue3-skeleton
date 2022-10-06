import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import {fileURLToPath, URL} from 'url'//Alias to friendly urls

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))//define de alias
    }
  }
})
