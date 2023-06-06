import {createApp} from 'vue'
import router from './router'
import App from "@/App.vue";
import { createI18n } from "vue-i18n";
import de from "./locales/de.json";
import en from "./locales/en.json";

const i18n = createI18n({
    locale: "de",
    fallbackLocale: "de",
    messages: { de, en },
});

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
