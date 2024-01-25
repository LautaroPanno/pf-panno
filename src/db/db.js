import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf5nqKntfYJ_SlKhUIX-CVYjqCWbLuHOI",
  authDomain: "eccomerce-limpialoom-react.firebaseapp.com",
  projectId: "eccomerce-limpialoom-react",
  storageBucket: "eccomerce-limpialoom-react.appspot.com",
  messagingSenderId: "372359680056",
  appId: "1:372359680056:web:748f399b26e51aec7cd6cd",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
