import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDUyQkoVT8zoL0ZMEplBwgoi0oyWCAuoNo",
  authDomain: "react-cursos-773e8.firebaseapp.com",
  projectId: "react-cursos-773e8",
  storageBucket: "react-cursos-773e8.appspot.com",
  messagingSenderId: "382591466206",
  appId: "1:382591466206:web:7b532293fe3b589fbd204f"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB   = getFirestore(FirebaseApp)