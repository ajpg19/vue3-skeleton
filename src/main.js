import { createApp } from 'vue'
import './style.css'

//pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//internationalization
import {createI18n} from "vue-i18n";
import messages from '@intlify/vite-plugin-vue-i18n/messages'

import App from './App.vue'
import {router} from '@/routes'

//pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages
})

createApp(App)
    // Make sure to _use_ the router instance to make the
    // whole app router-aware.
    .use(pinia)
    .use(i18n)
    .use(router)
    .mount('#app')
