import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginDialog: false
  },
  getters: {
    getLoginDialog: state => {
      return state.loginDialog
    }
  },
  mutations: {
    LOGIN_DIALOG(state, status) {
     state.loginDialog = status
    }
   
  },
  actions: {
    loginDialog({ commit }, status){
      commit('LOGIN_DIALOG', status)
    },
    addTodo({ commit }, todo){
      commit('ADD_TODO', todo)
    }
  }
})

