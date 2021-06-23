import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBA8-3nnHUfPMBfXa6gTBCLC-P1lc5ZWsw",
    authDomain: "signup-form-df968.firebaseapp.com",
    projectId: "signup-form-df968",
    storageBucket: "signup-form-df968.appspot.com",
    messagingSenderId: "658333140318",
    appId: "1:658333140318:web:f0e201afa48b87902bbbcf"
};

firebase.initializeApp(firebaseConfig);
const google = new firebase.auth.GoogleAuthProvider();

export { google, firebase };