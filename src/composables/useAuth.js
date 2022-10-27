import {ref} from "vue";
import {loginRequest, logoutRequest} from "@/services/httpservice.js";
import {useAuthStore} from "@/stores/useAuthStore.js";
import {router} from "@/routes";

export const useAuth = () => {

    // hardcoded values for testing purposes
    const email = ref('admin@coresolutions.es')
    const password = ref('Secret.,.123')
    const rememberMe = ref(true)
    const loginError = ref(false)

    async function login() {
        await loginRequest(email.value, password.value, rememberMe.value)
            .then(({data}) => {
                const {locale, code, success, data: authData} = data
                if (success && code === 200) {
                    const authStore = useAuthStore()
                    const {login, user} = authData
                    authStore.storeUserData(user, login, locale)
                    loginError.value = false
                    router.push({name:'Dashboard'})
                } else {
                    loginError.value = true
                }
            })
    }

    async function logout() {
        const authStore = useAuthStore()
        const {isLoggedIn, token} = authStore;
        if (isLoggedIn) {
            await logoutRequest(token)
                .then(({data}) => {
                    const {code, success} = data
                    if (success && code === 200) {
                        console.log('Successful logout')
                    }
                }).catch(error =>{
                    console.log('Logout error ', error)
                }).finally(()=>{
                    authStore.$patch({
                        token: '',
                        refreshToken: '',
                        loggedUsername: '',
                        loggedUserEmail: '',
                        isLoggedIn: false
                    })
                    router.push({name: 'Login'})
                })
        }
    }

    return {
        email, password, rememberMe, loginError, login, logout
    }
}