import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {router} from '@/routes/index.js'

createApp(App)
    // Make sure to _use_ the router instance to make the
    // whole app router-aware.
    .use(router)
    .mount('#app')
