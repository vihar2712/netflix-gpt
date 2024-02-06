// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDllwbY6lM7XN4h6_7Lx0l41tUEi9lSnVI",
  authDomain: "netflixgpt-dac7d.firebaseapp.com",
  projectId: "netflixgpt-dac7d",
  storageBucket: "netflixgpt-dac7d.appspot.com",
  messagingSenderId: "13105543102",
  appId: "1:13105543102:web:b76b7a7c3f38a016ddabef",
  measurementId: "G-TLJK1FCSXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
