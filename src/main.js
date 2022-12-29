import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import Popup from './components/Popup/Popup.vue'
import "./components/Popup/Popup.scss"
import "./components/Navbar/Navbar.scss"
createApp(App)
.use(router)
.component('Popup', Popup)
.mount('#app')
