import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementPlues from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(store).use(router).use(ElementPlues).mount('#app')
