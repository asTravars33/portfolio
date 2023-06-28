// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBW2BsgTIpSpNAqxMhP1JxcvSmLAaMm9M",
  authDomain: "portfolio-cb15f.firebaseapp.com",
  projectId: "portfolio-cb15f",
  storageBucket: "portfolio-cb15f.appspot.com",
  messagingSenderId: "48815885908",
  appId: "1:48815885908:web:aa3be293fa79fcc21167c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const phoneCollection = collection(db, "mobile");
export const webCollection = collection(db, "web");