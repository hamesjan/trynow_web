// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs7Ie1HfeEVNVSTrviSKOT1ZYrLNC_9kA",
  authDomain: "trysurfnow.firebaseapp.com",
  projectId: "trysurfnow",
  storageBucket: "trysurfnow.firebasestorage.app",
  messagingSenderId: "959543303261",
  appId: "1:959543303261:web:ffaefa5e63e6d49b3b41b4",
  measurementId: "G-BCCBT5GD5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);