// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcrRuFd5F5aLV_fO01csQtF_YxtHzp1ds",
  authDomain: "herbconnect1-e5fb3.firebaseapp.com",
  databaseURL:
    "https://herbconnect1-e5fb3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "herbconnect1-e5fb3",
  storageBucket: "herbconnect1-e5fb3.appspot.com",
  messagingSenderId: "487036813405",
  appId: "1:487036813405:web:4cf653fc0bae00aa840db4",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const fireStore = getFirestore(app)
