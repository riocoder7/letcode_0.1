// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5jTTkyXG17Q5UzBAUWagkzUzKt4BEOUc",
  authDomain: "pinterest-a2868.firebaseapp.com",
  projectId: "pinterest-a2868",
  storageBucket: "pinterest-a2868.firebasestorage.app",
  messagingSenderId: "797424830218",
  appId: "1:797424830218:web:35e1f5c21308c6c49d5cf3",
  measurementId: "G-YCKJJSM81G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
