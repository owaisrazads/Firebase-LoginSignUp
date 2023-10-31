import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYIyQESloIuXWYrEwbjwbQeZu91047uOo",
  authDomain: "practice-fbase.firebaseapp.com",
  projectId: "practice-fbase",
  storageBucket: "practice-fbase.appspot.com",
  messagingSenderId: "1047676945780",
  appId: "1:1047676945780:web:b864b99574db220c831821",
  measurementId: "G-VS338TYJES"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
