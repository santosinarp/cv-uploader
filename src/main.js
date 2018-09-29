import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import './registerServiceWorker'

import 'font-awesome/css/font-awesome.min.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  iconfont: 'fa4'
})

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
