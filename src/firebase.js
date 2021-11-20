import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAKeJOk6ny4GWhI795Sb-Pqiwp6cDIhlZ8",
  authDomain: "chillflix-io.firebaseapp.com",
  projectId: "chillflix-io",
  storageBucket: "chillflix-io.appspot.com",
  messagingSenderId: "661884659063",
  appId: "1:661884659063:web:3e3745d7edd882ef64ad72",
  measurementId: "G-9Z3W6RGXPL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)