// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmfTASBi1VzjcN2V6G6aIaFQDHhODgbhY",
  authDomain: "chesstune-web.firebaseapp.com",
  projectId: "chesstune-web",
  storageBucket: "chesstune-web.appspot.com",
  messagingSenderId: "539813196225",
  appId: "1:539813196225:web:cd3ee0314d65fe840bff40",
  measurementId: "G-YX6NTN1N7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);