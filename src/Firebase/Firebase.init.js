//DO NOT SHARE FIREBASE CONFIG ONLINE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5PWe_LspnVJHDHgOOtTXMPZdZKplac1o",
  authDomain: "simple-firebase-auth-d310d.firebaseapp.com",
  projectId: "simple-firebase-auth-d310d",
  storageBucket: "simple-firebase-auth-d310d.firebasestorage.app",
  messagingSenderId: "530214372288",
  appId: "1:530214372288:web:5e1fb9685458987e4bbe25",
  measurementId: "G-3S6WJY8FM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);