// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvB2mMTVvBJBEuSE5DBf3v4VhaY7DMADc",
  authDomain: "task-manager-4a2a4.firebaseapp.com",
  projectId: "task-manager-4a2a4",
  storageBucket: "task-manager-4a2a4.appspot.com",
  messagingSenderId: "351087526021",
  appId: "1:351087526021:web:5dc7aad71a77ff3059a9ec",
  measurementId: "G-MKWJS594Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
