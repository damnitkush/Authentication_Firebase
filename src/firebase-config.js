// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1c2LZJrkn6DlZ-vjlvtLkw2VjCS3bywM",
  authDomain: "react-firebase-40ac3.firebaseapp.com",
  projectId: "react-firebase-40ac3",
  storageBucket: "react-firebase-40ac3.appspot.com",
  messagingSenderId: "1054518916423",
  appId: "1:1054518916423:web:ce0a54a2cf2e70967ec862",
  measurementId: "G-BNLLEQRMJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
