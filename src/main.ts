import { createApp } from 'vue'
import App from './App.vue'
// vue-router
import router from './router'
// vuex
import store from './store'
// naive-ui 组件库
import naive from './plugins/naive'
// naive 字体样式
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
// normalize.css (初始化样式)
import 'normalize.css/normalize.css'
import axios from './http/axios'
const app = createApp(App)
// 全局挂载 axios
app.config.globalProperties.$http = axios
app.use(router).use(store).use(naive).mount('#app')
