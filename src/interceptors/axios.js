import axios from 'axios'
import {API_BASE_URL} from '@/services/httpservice.js'
import {useAuthStore} from "@/stores/useAuthStore.js"
import {useAuth} from "@/composables/useAuth.js"

axios.defaults.baseURL = API_BASE_URL

axios.interceptors.request.use(
    async config => {
        const {token, refreshToken} = useAuthStore()
        const pathname = new URL(config.url).pathname

        if (pathname === "/api/security/refresh-token") {
            config.headers["Authorization"] = `Bearer ${refreshToken}`
        } else {
            if (token) {
                const {tokenHealthy} = useAuth()
                await tokenHealthy()
                    .then((response) => {
                        if (response) {
                            const {token} = useAuthStore()
                            console.log(token)
                            config.headers["Authorization"] = `Bearer ${token}`
                        }
                    })
            }
        }
        return config
    },
    error => error
);