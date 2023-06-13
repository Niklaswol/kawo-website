import {createApp} from 'vue'
import router from './router'
import App from "@/App.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {createI18n} from "vue-i18n";
import de from "./locales/de.json";
import en from "./locales/en.json";

require('@/assets/main.scss');

library.add(fas, fab)

const i18n = createI18n({
    locale: "de",
    fallbackLocale: "de",
    messages: {de, en},
});

const app = createApp(App)

app.use(i18n)
app.use(router)
app.component('faIcon', FontAwesomeIcon)
app.mount('#app')
