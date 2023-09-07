// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAZdOpA987RWGCNVu7qlWfkQP2wKy3xV3c",
  authDomain: "ssipmt-connectapp.firebaseapp.com",
  projectId: "ssipmt-connectapp",
  storageBucket: "ssipmt-connectapp.appspot.com",
  messagingSenderId: "590205102381",
  appId: "1:590205102381:web:863dc283e58d16093d0ba4",
  measurementId: "G-MKQ60B8RW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth(app)
export const googlePovider = new GoogleAuthProvider();
export const db = getFirestore(app);