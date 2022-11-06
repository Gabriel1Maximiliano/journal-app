// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase';
import { getFirestore } from 'firebase/firestore/lite'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWwPWF-rpHZLPgoOEYDmukL-pV1jP-gTQ",
  authDomain: "journal-app-64663.firebaseapp.com",
  projectId: "journal-app-64663",
  storageBucket: "journal-app-64663.appspot.com",
  messagingSenderId: "332841248034",
  appId: "1:332841248034:web:b89087bfe6de7d3535317b"
};

// Initialize Firebase
export const FireBaseApp  = initializeApp(firebaseConfig);
export const FirebaseDB   = getFirestore( FireBaseApp );
export const FireBaseAuth = getAuth( FireBaseApp );
