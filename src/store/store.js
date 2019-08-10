import Vue from 'vue'
import Vuex from 'vuex'
import  firebase  from '../firebase/firebase';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    user: false,
    load: false,
    addState: false
  },
  getters: {
    login: state => {
      return state.user
    }
  },
  mutations: {
    LOGIN(state, user) {
      state.user = user
    },
    AUTH(state, user) {
      state.user = user
      state.load = true
    },
    LOGOUT(state, user) {
      state.user = user
    },
    ADD_NOTE(state, status) {
      state.addState = status
    },
    GET_NOTE(state, note) {
      state.notes = note
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        return firebase.login(user).then(() => {
          commit('LOGIN', true)
          resolve(this.getters.login)
        }).catch(e => {
          reject(e.code)
        })
      })
    },
    auth({ commit }) {
      return new Promise((resolve, reject) => {
        return firebase.isAuth().then((user) => {
          commit('AUTH', user)
          resolve(this.getters.login)
        }).catch(e => {
          reject(e)
        })
      })
    },
    logout({ commit }) {
      return new Promise(( resolve, reject) => {
        return firebase.logout().then(() => {
          commit('LOGOUT', false)
          resolve()
        }).catch(e => {
          reject(e)
        })
      })
    },
    addNote({ commit }, note) {
      return new Promise(( resolve, reject) => {
        return firebase.addNote(note).then(() => {
          commit('ADD_NOTE', true)
          resolve(this.state.addState)
        }).catch(e => {
          reject(e)
        })
      })
    },
    async getNote({ commit } ) {
      let query = await firebase.getNote()
      const note = query.docs.map(doc => {
        return doc.data()
      })
      commit('GET_NOTE', note)}
  }
})

