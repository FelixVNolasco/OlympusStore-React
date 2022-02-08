import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzooacHCgtLuB9Q9OwCnIDknVDfnNVmJ0",
    authDomain: "olympus-store.firebaseapp.com",
    projectId: "olympus-store",
    storageBucket: "olympus-store.appspot.com",
    messagingSenderId: "314288133638",
    appId: "1:314288133638:web:5a18c9dca1e3d7d2ca5587"
};
 
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);
 
export{
  db,
  firebaseApp,
  googleAuthProvider,
};