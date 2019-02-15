import Vue from 'vue'
import App from './App.vue'

// 导入全局样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './assets/css/index.css'

// 导入路由模块儿
import router from './routes/router'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
