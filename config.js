import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfLvdd7IUY49uF63QJylMecwHxicLY78E",
  authDomain: "login-page-c3444.firebaseapp.com",
  projectId: "login-page-c3444",
  storageBucket: "login-page-c3444.appspot.com",
  messagingSenderId: "986956416108",
  appId: "1:986956416108:web:3160e01212bb53d79f8449",
  measurementId: "G-3G1YV6GP7P",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
