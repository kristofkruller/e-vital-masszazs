// Import Firebase SDK modules from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Public values
const firebaseConfig = {
  apiKey: "AIzaSyBX4pR4sr1MM-PsdTdQJGLvM4pBK8RghJM",
  authDomain: "calendar-service-58aff.firebaseapp.com",
  databaseURL:
    "https://calendar-service-58aff-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "calendar-service-58aff",
  storageBucket: "calendar-service-58aff.appspot.com",
  messagingSenderId: "55968376260",
  appId: "1:55968376260:web:c1d67ea42fb5794a0ab091",
  measurementId: "G-HBH89EZFFD",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

// Function to sign in with Google
export function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const idToken = result.user.za
      console.log("Google ID Token:", idToken)
    })
    .catch((error) => {
      console.error("Sign-in error:", error)
    })
}

// Function to sign out
export function signOut() {
  firebaseSignOut(auth)
    .then(() => {
      console.log("User signed out")
    })
    .catch((error) => {
      console.error("Sign-out error:", error)
    })
}
