import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import es from '@/locales/es.json'

const locale = () => {
    const actual = ['en', 'es'].find(el => navigator.language.split('-')[0] === el)
    return actual ? actual :  'en'
}

export const i18n = createI18n({
    //locale: navigator.language.split('-')[0],
    locale: locale(),
    fallbackLocale: 'es',
    messages: {
        en,
        es,
    }
})