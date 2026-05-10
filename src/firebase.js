import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "Test",
    authDomain: "rutikshirkeportfolio.firebaseapp.com",
    projectId: "rutikshirkeportfolio",
    storageBucket: "rutikshirkeportfolio.firebasestorage.app",
    messagingSenderId: "514279991307",
    appId: "1:514279991307:web:49e637bbbbe5b29dd1ff0e",
    measurementId: "G-B7XRFYVN2C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
