// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT_yFf3RztB0L-UiQ8y-lyBigckNmZHYo",
  authDomain: "wedding-photographer-17c01.firebaseapp.com",
  projectId: "wedding-photographer-17c01",
  storageBucket: "wedding-photographer-17c01.appspot.com",
  messagingSenderId: "102002514955",
  appId: "1:102002514955:web:5783cf719c21b997dfbb0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;