import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { firebaseConfig } from "./config.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


const signUpUser = () => {
    const username = document.getElementById('uName').value
    const email = document.getElementById('mail').value
    const password = document.getElementById('pass').value

    if (username === '' || email === '' || password === '') {
        alert('Input cannot be empty, fill it up')
    } else {
        const userObj = { username, email, password }
        console.log(userObj);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setTimeout(()=>{
                    window.location.href = 'signin.html'
                }, 1000)
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if (errorCode === 'auth/password-does-not-meet-requirements') {
                    alert('password must contain special character, lowercase, uppercase, number and not less than 8 characters.')
                }
                if (errorCode === 'auth/email-already-in-use') {
                    alert('Email already in use.')
                }
                if (errorCode === 'auth/invalid-email') {
                    alert('Invalid email address.');
                }
                if (errorCode === 'auth/operation-not-allowed') {
                    alert('Email/password accounts are not enabled.');
                }
                if (errorCode === 'auth/missing-password') {
                    alert('Password is required.');
                }
                if (errorCode === 'auth/internal-error') {
                    alert('An internal error occurred. Please try again.');
                }
            });
    }
}


window.signUpUser = signUpUser