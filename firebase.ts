import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyATh4WsETbYG-Jnfi3Mh2w9dKjlGc7B0RY",
    authDomain: "dropbox-b9936.firebaseapp.com",
    projectId: "dropbox-b9936",
    storageBucket: "dropbox-b9936.appspot.com",
    messagingSenderId: "756162221622",
    appId: "1:756162221622:web:059c0dc1a916d4cd5c2a97",
    measurementId: "G-W80VFHSLC6"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  const db = getFirestore(app)
//   const auth = getAuth(app)
//   const functions = getFunctions(app)
  const storage = getStorage(app)

  export{ db, storage }