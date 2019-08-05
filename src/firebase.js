import  * as firebase from 'firebase';
import 'firebase/firestore';
import { config } from './firebase.config'
firebase.initializeApp(config).firestore()

export default {
  login: function(user) {
     return new Promise((resolve, reject) => {
       firebase.auth().signInWithEmailAndPassword(user.email, String(user.pass)).then(user => {
         if (user) {
           resolve(user)
         }
       }).catch(e => {
         reject(e)
       })
     }) 
  }
}