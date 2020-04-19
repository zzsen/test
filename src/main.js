import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './service'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/materialdesignicons.min.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
