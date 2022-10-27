import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";

export const useLanguageStore = defineStore('langStore', () => {

    // State
    const showLanguageSelectionDialog = ref(false)
    const currentLocale = ref('es');
    const selectedLocale = ref('es')
    //available languages
    const languagesList = reactive([
        {language: 'Español', locale: 'es'},
        {language: 'English', locale: 'en'}
    ])

    // Getters
    const selectedLanguage = computed(() => {
        return languagesList.find(it => it.locale === currentLocale.value)
    })

    // Actions
    function toggleLanguageSelectionDialog() {
        showLanguageSelectionDialog.value = !showLanguageSelectionDialog.value
    }

    function changeLocale() {
        i18n.global.locale.value = selectedLocale.value
        currentLocale.value = selectedLocale.value
        showLanguageSelectionDialog.value = false
    }

    function cancelChangeLocale() {
        selectedLocale.value = currentLocale.value
        showLanguageSelectionDialog.value = false
    }

    return {
        showLanguageSelectionDialog,
        currentLocale,
        languagesList,
        selectedLanguage,
        selectedLocale,
        toggleLanguageSelectionDialog,
        changeLocale, cancelChangeLocale
    }
}, {persist: true})