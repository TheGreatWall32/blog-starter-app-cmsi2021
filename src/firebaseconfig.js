import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC4yrebVNQUVLej-sPyNR4tqPVuG8ZMmek",
    authDomain: "barebones-5be44.firebaseapp.com",
    projectId: "barebones-5be44",
    storageBucket: "barebones-5be44.firebasestorage.app",
    messagingSenderId: "941248679067",
    appId: "1:941248679067:web:731b8fae5326ba277aca3e"
  };  

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)