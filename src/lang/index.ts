import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es'
import en from './en'

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            es: {
                translation: es
            },
            en: {
                translation: en
            }
        }
    });

export default i18n;