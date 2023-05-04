
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCuPEawsJ0Oy1X9CYDtM0pSw8gJDxNsZVw",
  authDomain: "fire-auth-bc3f3.firebaseapp.com",
  projectId: "fire-auth-bc3f3",
  storageBucket: "fire-auth-bc3f3.appspot.com",
  messagingSenderId: "560050375972",
  appId: "1:560050375972:web:93857c31281e6ace72b7b1"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};