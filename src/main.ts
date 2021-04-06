import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import './registerServiceWorker'
import '@/assets/css/common.scss'

const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
