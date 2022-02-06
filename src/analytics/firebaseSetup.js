// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA3RFA4mPe1mSlk3XMOZe8QmqZJFzmUi4I",
  authDomain: "test-2-all.firebaseapp.com",
  projectId: "test-2-all",
  storageBucket: "test-2-all.appspot.com",
  messagingSenderId: "289529688007",
  appId: "1:289529688007:web:c0399f1c16c46f398df3e2",
  measurementId: "G-V82L6GD7XN",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);

//Metricas
export const holaMundo = () => logEvent(analytics, "Hola Mundo");
