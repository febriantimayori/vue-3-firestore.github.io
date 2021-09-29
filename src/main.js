import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
// import Vue from 'vue'
// import { firestorePlugin } from 'vuefire'

// Vue.use(firestorePlugin)

createApp(App).use(router).mount('#app')
