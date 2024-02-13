// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage" 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnta1ZxDl09r4gM_KqUkqijHh6gQOvf8A",
  authDomain: "codoproyecto.firebaseapp.com",
  projectId: "codoproyecto",
  storageBucket: "codoproyecto.appspot.com",
  messagingSenderId: "438281920313",
  appId: "1:438281920313:web:dad1c1ceea59b0baf892e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore(app)