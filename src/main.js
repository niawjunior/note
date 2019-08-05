import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import store from './store'
import router from './router'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VeeValidate from 'vee-validate';
Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(VueMaterial)
import velocity from 'velocity-animate'

import Notifications from 'vue-notification'

Vue.use(Notifications, { velocity })
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')