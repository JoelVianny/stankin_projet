// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOg-ItsvaAipFUsQtvHmLYIWfSVAas5dg",
  authDomain: "stankin-23056.firebaseapp.com",
  projectId: "stankin-23056",
  storageBucket: "stankin-23056.appspot.com",
  messagingSenderId: "806729067141",
  appId: "1:806729067141:web:cb053eddf41d42f8c217ec",
  measurementId: "G-6Q684M1YVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
