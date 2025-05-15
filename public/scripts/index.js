import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { firebaseConfig } from "./config";


const app = initializeApp(firebaseConfig);


const signUserUp = () => {
    const username = document.getElementById('uName').value
    const email = document.getElementById('mail').value
    const password = document.getElementById('pass').value

    if (username === '' || email === '' || password === '') {
        alert('Input cannot be empty, fill it up')
    } else {
        const userObj = { username, email, password }
        console.log(userObj);

    }
}




window.signUserUp = signUserUp