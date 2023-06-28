import {createApp} from 'vue'
import router from './router'
import App from "@/App.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import i18n from './translations'
import store from './store'

require('@/assets/main.scss');
library.add(fas, fab)

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(VueSplide);
app.use(store)
app.component('faIcon', FontAwesomeIcon)
app.mount('#app')
