import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBa2E846Xh2ctou1hzfFrsAPmit2Hd8v7M",
    authDomain: "disneyplus-clone-d5efd.firebaseapp.com",
    projectId: "disneyplus-clone-d5efd",
    storageBucket: "disneyplus-clone-d5efd.appspot.com",
    messagingSenderId: "433774980580",
    appId: "1:433774980580:web:5e79cdbfeb2a31d7dc2bf1",
    measurementId: "G-SKZE5QPM81"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth , provider , storage};
export default db;
