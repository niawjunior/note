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
    addState: false,
    tag: null
  },
  getters: {
    login: state => {
      return state.user
    },
    tag: state => {
      return state.tag
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
      let tagArr = []
      state.notes = note
      state.notesInit = note
      state.notesInit.forEach(item => {
        tagArr.push(...item.tag)
      })
      const uniqueTag = [...new Set(tagArr)]
      let result = []
      uniqueTag.forEach(tag => {
        let item = []
        tagArr.forEach(str => {
          if (tag === str) {
            item.push(str)
          }
        })
        result.push({
          tag,
          count: item.length
        })
      })
      state.tag = result
    },
    SEARCH(state, data) {
      state.notes = data.keyword ? data.result : state.notesInit
    },
    SEARCH_BY_TAG(state, data) {
      console.log(data.tag)
      state.notes = data.tag.length == 0 ? state.notesInit : data.result
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
    getNote({ commit } ) {
       firebase.getNote().then(result => {
         commit('GET_NOTE', result)
       })
    },
    search({ commit }, keyword) {
      const options = {
        shouldSort: true,
        threshold: 0.5,
        location: 0,
        distance: 100,
        maxPatternLength: 15,
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
    },
    searchByTag({ commit }, tag) {
      let result = []
      tag.filter(tag => {
        const r = this.state.notesInit.filter(note => {
          return note.tag.includes(tag)
        })
        result.push(...r)
      })
      commit('SEARCH_BY_TAG', {
        result,
        tag
      } )
    }
  }
})

