// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAcSzTR1P6JWn6WgCdoKq3JVvDlr0GiQow",
  authDomain: "restaraunt-47a20.firebaseapp.com",
  projectId: "restaraunt-47a20",
  storageBucket: "restaraunt-47a20.appspot.com",
  messagingSenderId: "760875953699",
  appId: "1:760875953699:web:8f3c44f7e3bc27f6518b96",
  measurementId: "G-88ST4K2DEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;