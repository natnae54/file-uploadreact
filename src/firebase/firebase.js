import {initializeApp} from "firebase/app"

import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBbToh67IxCnQNXsI6OnpqVPT79fbUQyt8",
    authDomain: "auth-b452a.firebaseapp.com",
    projectId: "auth-b452a",
    storageBucket: "auth-b452a.appspot.com",
    messagingSenderId: "387977858271",
    appId: "1:387977858271:web:20879c438f639db28ced6a",
    measurementId: "G-EXYYP9XC3D"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

 export const storage= getStorage(app)