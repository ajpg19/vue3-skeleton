import { defineConfig } from 'vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n' //internationalization
import {dirname, resolve} from 'node:path'
import {fileURLToPath, URL} from 'url'//Alias to friendly urls

import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      vueI18n({
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**')//messages
      }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))//define de alias
    }
  }
})
