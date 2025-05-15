import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyD5mjt7FUpdTken2zHsfTXfxHwj57UQfmA",
    authDomain: "project-7344964741905264725.firebaseapp.com",
    projectId: "project-7344964741905264725",
    storageBucket: "project-7344964741905264725.firebasestorage.app",
    messagingSenderId: "572237883469",
    appId: "1:572237883469:web:533a04c64143af4e90d404"
};

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