
firebase.initializeApp({
  apiKey: "AIzaSyAuddW0ZvYCoK-Zn4v3-I4uBYcRMEUIBGg",
  authDomain: "note-6f627.firebaseapp.com",
  databaseURL: "https://note-6f627.firebaseio.com",
  projectId: "note-6f627",
  storageBucket: "note-6f627.appspot.com",
  messagingSenderId: "709206152306",
  appId: "1:709206152306:web:f36f25cf7322e765"
});

var db = firebase.firestore();

db.settings({timestampsInSnapshots: true});
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.command == "add"){
      db.collection(msg.collection).add(msg.data).then(() => {
        var notiOptions = {
          type: 'basic',
          iconUrl: 'icon48.png',
          title: 'success',
          message: ''
        }
        chrome.notifications.create(notiOptions)
      }).catch((result) => {
        alert('fail')
      });
    }
    if (msg.command == 'auth') {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
        } else {
          var email = prompt('email')
          var password = prompt('password')
          firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
            alert(user.uid)
          }).catch(e => {
            alert(e.code)
          })
        }
      })
    }
  });