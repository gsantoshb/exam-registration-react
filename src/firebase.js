import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,    
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID

  // apiKey: "AIzaSyBJRpxx-CF8ljURj8Lxi__g2NfQH8WBtBo",
  // authDomain: "exam-registration-react.firebaseapp.com",
  // databaseURL: "https://exam-registration-react-default-rtdb.firebaseio.com",
  // projectId: "exam-registration-react",
  // storageBucket: "exam-registration-react.appspot.com",
  // messagingSenderId: "883813278105",
  // appId: "1:883813278105:web:91d41b50b1e754e2747308"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })

export { db, auth, storage };