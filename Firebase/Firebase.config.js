// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbso0UHPPnvUZ77Bq77zvt7cB8HX0w3ao",
  authDomain: "taste-temple-auth.firebaseapp.com",
  projectId: "taste-temple-auth",
  storageBucket: "taste-temple-auth.appspot.com",
  messagingSenderId: "606127720661",
  appId: "1:606127720661:web:eca9f52b1c684f28b03a5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;