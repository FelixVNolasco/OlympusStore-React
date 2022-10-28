import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider } from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
// const twitterAuthProvider = new TwitterAuthProvider();

export {
    app,
    googleAuthProvider,
    facebookAuthProvider,
    // twitterAuthProvider
};