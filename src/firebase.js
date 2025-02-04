// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEKY8D03irQppaiFhIAa0nlEHMuB5ZBJg",
  authDomain: "ecommerce-d6038.firebaseapp.com",
  projectId: "ecommerce-d6038",
  storageBucket: "ecommerce-d6038.firebasestorage.app",
  messagingSenderId: "620476201931",
  appId: "1:620476201931:web:94c4f07cf2dcd23b76d44e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);