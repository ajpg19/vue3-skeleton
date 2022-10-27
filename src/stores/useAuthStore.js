import {defineStore, storeToRefs} from "pinia";
import {ref} from "vue";

import {useLanguageStore} from "@/stores/useLanguageStore.js";


export const useAuthStore = defineStore('authStore', () => {

    const langStore = useLanguageStore()
    const {selectedLocale, currentLocale} = storeToRefs(langStore)

    // State
    const token = ref('');
    const refreshToken = ref('')
    const loggedUsername = ref('')
    const loggedUserEmail = ref('')
    const isLoggedIn = ref(false)

    // Actions
    function storeUserData(user, login, locale) {
        loggedUserEmail.value = user.attributes.email
        loggedUsername.value = user.attributes.name
        token.value = login.token
        refreshToken.value = login.refreshToken
        isLoggedIn.value = true
        selectedLocale.value = locale
        currentLocale.value = locale
        //i18n.global.locale.value = locale
    }

    return {
        token, refreshToken, isLoggedIn, loggedUserEmail,
        loggedUsername, storeUserData
    }
}, {persist: true})