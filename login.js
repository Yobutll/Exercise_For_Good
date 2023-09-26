import { initializeApp } from "../firebase/app";
import { getAnalytics } from "../firebase/analytics";
import firebase from '/firebase/app';
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


const loginForm = document.getElementById('login-form');
const firebaseConfig = {
    apiKey: "AIzaSyCvEX2dnyLlPz--Z4-_C3xQXjQZFjszhM8",
    authDomain: "exercise-for-goodhealth.firebaseapp.com",
    databaseURL: "https://exercise-for-goodhealth-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "exercise-for-goodhealth",
    storageBucket: "exercise-for-goodhealth.appspot.com",
    messagingSenderId: "174422127893",
    appId: "1:174422127893:web:c638bee568ea369f86651c",
    measurementId: "G-R392B0FLF4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// Add an event listener to the form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Use Firebase Authentication to sign in
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User successfully signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
            // You can redirect the user to another page or perform other actions here
        })
        .catch((error) => {
            // Handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorCode, errorMessage);
        });
});
