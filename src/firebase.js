// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFnYEHEIAhRuasFgHAvaz4wrt6r8jSRKg",
  authDomain: "hackathon-ev21.firebaseapp.com",
  projectId: "hackathon-ev21",
  storageBucket: "hackathon-ev21.appspot.com",
  messagingSenderId: "458549821982",
  appId: "1:458549821982:web:542359b35052d0042e240f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
