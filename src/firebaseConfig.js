// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJDmJa6KPejRckftPgfOuQjWlQgaZ1shE",
  authDomain: "test-93fb0.firebaseapp.com",
  projectId: "test-93fb0",
  storageBucket: "test-93fb0.appspot.com",
  messagingSenderId: "960481249713",
  appId: "1:960481249713:web:fda28aa0797db29fb31590",
  measurementId: "G-3KZXZ9ELT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);