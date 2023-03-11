import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDLOF59F0ctIqGLqiK5DCkZeUnCv7w2KA0",
  authDomain: "disneyplus-clone-7c368.firebaseapp.com",
  projectId: "disneyplus-clone-7c368",
  storageBucket: "disneyplus-clone-7c368.appspot.com",
  messagingSenderId: "426131682274",
  appId: "1:426131682274:web:4df4382705e1fae7feffbb",
  measurementId: "G-4LPX9PV03T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider  = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider};
export default db;
