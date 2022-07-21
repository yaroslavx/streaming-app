// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-usrRl9KLc7ydIrCQaENGEINfRt_7GWg",
    authDomain: "streaming-app-179a5.firebaseapp.com",
    projectId: "streaming-app-179a5",
    storageBucket: "streaming-app-179a5.appspot.com",
    messagingSenderId: "378952385165",
    appId: "1:378952385165:web:72d6eb60e852be932d18c4"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }