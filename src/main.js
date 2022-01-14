import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './router'
import {store} from './store'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify)

const router  = new VueRouter({
    routes: Routes,
    mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router,
  store: store,
  vuetify : new Vuetify(),
}).$mount('#app')
