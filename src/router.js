import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
Vue.use(VueRouter)

const routes = [
  { path: '', component: Home},
  { path: '/login', component: Login }
]

export default new VueRouter({
  routes,
  mode: 'history'
})