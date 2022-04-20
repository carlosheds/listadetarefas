import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxfzlaRKIU435b5a4dEbdkap-Ow2fqxi4",
    authDomain: "persistenciarecode-27c2c.firebaseapp.com",
    projectId: "persistenciarecode-27c2c",
    storageBucket: "persistenciarecode-27c2c.appspot.com",
    messagingSenderId: "1080734000929",
    appId: "1:1080734000929:web:bf5f7622038e9cee360060"
  };

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  const database = firebase.firestore();
  export default database;