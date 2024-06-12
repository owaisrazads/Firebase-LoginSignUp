
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './config.js';

const form = document.querySelector('#form')
const email = document.querySelector('#username')
const password = document.querySelector('#password')
const login = document.querySelector('#login')




form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (email.value && password.value !== "") {    
        console.log(email.value);
        console.log(password.value);
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((res) => {
                const user = res.user;
                console.log(user);
                window.location = "login.html"
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                  })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                console.log(errorCode);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    title: errorCode,
                  })
            });
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            title: 'Something went wrong!',
          })
    }
})

login.addEventListener('click' , ()=> {
    window.location = "login.html"
})
