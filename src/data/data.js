// Import the functions you need from the SDKs you need
import 'dotenv/config';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "prueba-nodejs-f155b",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

/*const firebaseConfig = {
  apiKey: "AIzaSyDrFBFbu14htyJ2HgzQhI1w-caQHNJZIKM",
  authDomain: "prueba-nodejs-f155b.firebaseapp.com",
  projectId: "prueba-nodejs-f155b",
  storageBucket: "prueba-nodejs-f155b.firebasestorage.app",
  messagingSenderId: "928738435253",
  appId: "1:928738435253:web:ed9320caff13fd2da21efc"
};*/