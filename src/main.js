import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

// console.log(process.env.VUE_APP_APP_ID);

createApp(App).use(store, axios).use(router).mount('#app')
