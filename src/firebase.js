import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDpHfJnH-ZUWcTi0zW0cz_y1653ocR7aoQ",
    authDomain: "fir-auth-5a315.firebaseapp.com",
    projectId: "fir-auth-5a315",
    storageBucket: "fir-auth-5a315.appspot.com",
    messagingSenderId: "1016170443261",
    appId: "1:1016170443261:web:92560bde460f9dc6d56994",
    measurementId: "G-57SPGKNYYS"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };