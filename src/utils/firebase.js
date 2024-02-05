// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFvgjPvhRQcBjx_plec6UtBOGcjY3yrCY",
  authDomain: "netflix-gpt-f5d1a.firebaseapp.com",
  projectId: "netflix-gpt-f5d1a",
  storageBucket: "netflix-gpt-f5d1a.appspot.com",
  messagingSenderId: "1077195503449",
  appId: "1:1077195503449:web:7ccef2415ffd96a5927e48",
  measurementId: "G-ZBB6L05T87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
