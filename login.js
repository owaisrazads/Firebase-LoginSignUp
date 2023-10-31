import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './config.js';


const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const signUp = document.querySelector('#signUp')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            window.location = 'web.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})

signUp.addEventListener('click' , ()=>{
    window.location = 'index.html'
})