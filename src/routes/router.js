import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Add from '../components/Add'
import guard from './route-guard'
Vue.use(VueRouter)

const routes = [
  { path: "*", component: Home },
  { path: '', name: '/', component: Home},
  { path: '/add', name: 'add', component: Add, beforeEnter: guard.auth},
  { path: '/login', name: 'login', component: Login, beforeEnter: guard.secure }
]

export default new VueRouter({
  routes,
  // mode: 'history'
})