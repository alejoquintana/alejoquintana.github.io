import './assets/main.css'

// Import our custom CSS
import '../src/assets/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from '/node_modules/bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
