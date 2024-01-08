// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB08wNjX-UQmCJT9_sbOJSG-pxXdV6l_sM",
  authDomain: "time-tracker-website.firebaseapp.com",
  projectId: "time-tracker-website",
  storageBucket: "time-tracker-website.appspot.com",
  messagingSenderId: "219316248201",
  appId: "1:219316248201:web:7866f2e7a439172fc0b058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;