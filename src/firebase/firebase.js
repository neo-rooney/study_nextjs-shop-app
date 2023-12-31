// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcOc2GMOZZ5ezRh4cPXzhIeh_WsEzmISU",
  authDomain: "react-next-shop-app-ced15.firebaseapp.com",
  projectId: "react-next-shop-app-ced15",
  storageBucket: "react-next-shop-app-ced15.appspot.com",
  messagingSenderId: "540873707551",
  appId: "1:540873707551:web:5877cad44fa00ecbd8852a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFireStore(app);

export const storage = getStorage(app);

export default app;
