// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg5LmRYDWf_owAgcXvjSv0wi9EBMcEqY4",
  authDomain: "twelfth-assignment-a6d33.firebaseapp.com",
  projectId: "twelfth-assignment-a6d33",
  storageBucket: "twelfth-assignment-a6d33.appspot.com",
  messagingSenderId: "62652469528",
  appId: "1:62652469528:web:a00844195d08cfb9e00e6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;