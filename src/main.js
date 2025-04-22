import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AppBtn from './components/AppBtn.vue'

const app = createApp(App)
app.component('AppBtn', AppBtn)

app.mount('#app')
