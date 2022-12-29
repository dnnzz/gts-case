import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import Popup from './components/Popup/Popup.vue'
import SvgIcon from 'vue3-icon';
import { createI18n } from 'vue-i18n' 
import { LOCALE_EN, LOCALE_TR, LOCALE_DE } from './locale/locales.js'
import "./components/Popup/Popup.scss"
import "./components/Navbar/Navbar.scss"

const i18n = createI18n({
  locale: 'en',
  legacy : false,
  globalInjection: true,
  messages: {
    en:LOCALE_EN,
    tr:LOCALE_TR,
    de:LOCALE_DE
  }
});
createApp(App)
.use(router)
.use(i18n)
.component('Popup', Popup)
.component("svg-icon", SvgIcon)
.mount('#app')
