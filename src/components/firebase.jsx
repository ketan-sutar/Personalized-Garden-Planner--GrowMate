// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOGrcM7NCG2tulWfEVcvylso5WrYBTSAw",
  authDomain: "growmate-bf1ea.firebaseapp.com",
  projectId: "growmate-bf1ea",
  storageBucket: "growmate-bf1ea.firebasestorage.app",
  messagingSenderId: "796697976430",
  appId: "1:796697976430:web:ecbbe61321f480d391107f",
  measurementId: "G-N5X3X0ZG14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth=getAuth();
export const db=getFirestore(app);

export default app;