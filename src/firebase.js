// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvEX2dnyLlPz--Z4-_C3xQXjQZFjszhM8",
  authDomain: "exercise-for-goodhealth.firebaseapp.com",
  projectId: "exercise-for-goodhealth",
  storageBucket: "exercise-for-goodhealth.appspot.com",
  messagingSenderId: "174422127893",
  appId: "1:174422127893:web:c638bee568ea369f86651c",
  measurementId: "G-R392B0FLF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;