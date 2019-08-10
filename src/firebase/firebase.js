import  * as firebase from 'firebase';
import 'firebase/firestore';
import { config } from '../config/firebase'
const database = firebase.initializeApp(config).firestore()

export default {
  login(user){
     return new Promise((resolve, reject) => {
       firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(user => {
         if (user) {
           resolve(user)
         }
       }).catch(e => {
         reject(e)
       })
     }) 
  },
  isAuth() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(true)
        } else {
          resolve(false)
        }
      }, e => {
        reject(e)
      })
    })
  },
  logout() {
    return new Promise((resolve, reject) => {
      return firebase.auth().signOut().then(() => {
        resolve(null)
      }).catch(e => {
        reject(e)
      })
    })
  },
  addNote(note){
    return new Promise((resolve, reject) => {
      return database.collection('Notes').add(note).then((result) => {
        resolve(result)
      }).catch(e => {
        reject(e)
      })
    })
  },
  async getNote () {
    let query = database.collection('Notes')
    return await query.get()
  }
}