import {createRouter, createWebHistory} from 'vue-router'

// 1. Define route components.
// These are imported from other files (index container).
import {
    DashboardView,
    LoginView,
    NotFoundView
} from '@/views/index.js'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    //Main views
    {path: '/', name: 'dashboard', component: DashboardView},
    {path: '/login', name: 'education', component: LoginView},
    //Errors views
    {path: '/:pathMatch(.*)*', component: NotFoundView},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(import.meta.env.BASE_URL),
    routes, // short for `routes: routes`
    linkActiveClass: 'text-vivid-600'
})
// 5. Create and mount the root instance: src/main.js