import Vue from 'vue'
import Vuex from 'vuex'
import  firebase  from './firebase';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    user: null
  },
  getters: {
    login: state => {
      return state.user
    }
  },
  mutations: {
    LOGIN(state, user) {
      state.user = {
        data: user,
        status: true
      }
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        return firebase.login(user).then(user => {
          commit('LOGIN', user)
          resolve(this.getters.login)
        }).catch(e => {
          reject(e.code)
        })
      })
    }
  }
})

