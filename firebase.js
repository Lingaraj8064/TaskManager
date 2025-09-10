// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvB2mMTVvBJBEuSE5DBf3v4VhaY7DMADc",
  authDomain: "task-manager-4a2a4.firebaseapp.com",
  projectId: "task-manager-4a2a4",
  storageBucket: "task-manager-4a2a4.firebasestorage.app",
  messagingSenderId: "351087526021",
  appId: "1:351087526021:web:5dc7aad71a77ff3059a9ec",
  measurementId: "G-MKWJS594Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);