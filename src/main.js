import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'


axios.defaults.baseURL = 'http://landing.socialbot.dev/api/v1/public'

require('@/assets/bootstrap/js/bootstrap.min.js');
require('@/assets/js/app.js');

// console.log(process.env.VUE_APP_APP_ID);

createApp(App).use(store, axios).use(router).mount('#app')
