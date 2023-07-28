// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA83PoyV6eQuKKI8yNKH-tBvWMR9IvrigE",
  authDomain: "crave-hub.firebaseapp.com",
  projectId: "crave-hub",
  storageBucket: "crave-hub.appspot.com",
  messagingSenderId: "737021878285",
  appId: "1:737021878285:web:c862bae82a4cf74980f544",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
