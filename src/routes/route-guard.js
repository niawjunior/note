import store from '../store/store'
export default {
  auth(to, from, next) {
    store.dispatch('auth').then(user => {
      if (user) {
        next()
      } else {
        next('/login')
      }
    })
  },
  secure(to, from, next) {
    store.dispatch('auth').then(user => {
      if (user) {
        next('/')
      } else {
        next()
      }
    })
  }
}