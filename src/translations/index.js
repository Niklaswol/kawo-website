import {createI18n} from "vue-i18n";
import de from "./de.json";
import en from "./en.json";

const i18n = createI18n({
    locale: "de",
    fallbackLocale: "de",
    globalInjection: true,
    messages: {de, en},
    legacy: false,
    inheriteLocale: true,
});

export default i18n