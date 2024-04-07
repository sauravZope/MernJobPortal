// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcZYATOJEHsu9i0Eg3HN1TFb5nTa3-aQU",
  authDomain: "job-portal-cb796.firebaseapp.com",
  projectId: "job-portal-cb796",
  storageBucket: "job-portal-cb796.appspot.com",
  messagingSenderId: "1058870477423",
  appId: "1:1058870477423:web:fe1d7c6a731e240a87c39a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const database=getAuth(app);
 
 export default app;
