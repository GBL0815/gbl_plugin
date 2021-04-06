import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import './registerServiceWorker'
import '@/assets/css/common.scss'
import LLUI from '~/index'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(LLUI)

app.mount('#app')
