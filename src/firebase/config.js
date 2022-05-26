import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2sIqBhiK664_tl_Tejt4WVYt7_WRU47U",
  authDomain: "readinglistapp-4edfa.firebaseapp.com",
  projectId: "readinglistapp-4edfa",
  storageBucket: "readinglistapp-4edfa.appspot.com",
  messagingSenderId: "354153849970",
  appId: "1:354153849970:web:9f97f0d8359712886bceeb"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

export { db }
