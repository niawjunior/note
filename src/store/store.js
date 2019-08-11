import Vue from 'vue'
import Vuex from 'vuex'
import Fuse from 'fuse.js';
import  firebase  from '../firebase/firebase';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: null,
    notesInit: null,
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
      state.notesInit = note
    },
    SEARCH(state, data) {
      state.notes = data.keyword ? data.result : state.notesInit
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
      commit('GET_NOTE', note)
    },
    search({ commit }, keyword) {
      const options = {
        shouldSort: true,
        tokenize: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "category",
          "description",
          "name",
          "tag"
        ]
      };
      const fuse = new Fuse(this.state.notesInit, options)
      const result = fuse.search(keyword);
      commit('SEARCH', {
        result,
        keyword
      } )
    }
  }
})

