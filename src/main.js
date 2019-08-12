import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import App from './App.vue'
import VueMaterial from 'vue-material'
import store from './store/store'
import router from './routes/router'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VeeValidate from 'vee-validate';
import AsyncComputed from 'vue-async-computed'
import velocity from 'velocity-animate'
import Notifications from 'vue-notification'
import firebase from './firebase/firebase'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import { dateFilter } from "vue-date-fns";
Vue.filter("date", dateFilter);

Vue.use(AsyncComputed)
Vue.config.productionTip = false
Vue.use(VeeValidate)
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(Notifications, { velocity })
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
new Vue({
  store,
  router,
  created() {
    firebase.isAuth().then(user => {
      if (user) {
        store.commit('AUTH', user)
      } else {
        store.commit('AUTH', user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')