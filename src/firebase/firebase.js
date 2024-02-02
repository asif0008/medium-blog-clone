import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEFgm0F5d5afrTQORB8ymd_zU9dajuDrQ",
  authDomain: "medium-blog-clone-a38e6.firebaseapp.com",
  projectId: "medium-blog-clone-a38e6",
  storageBucket: "medium-blog-clone-a38e6.appspot.com",
  messagingSenderId: "111738035835",
  appId: "1:111738035835:web:3ee724a63da4bd1c95ccde",
  measurementId: "G-04SH41RPWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);



