// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHezklaYqhUnm5pBDrqRmzhZ_2uab4gLA",
  authDomain: "todo-list-app-76670.firebaseapp.com",
  projectId: "todo-list-app-76670",
  storageBucket: "todo-list-app-76670.appspot.com",
  messagingSenderId: "488919781325",
  appId: "1:488919781325:web:6efe93bb84d9a24464fe84",
  measurementId: "G-8Q5DGJCWP1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();
