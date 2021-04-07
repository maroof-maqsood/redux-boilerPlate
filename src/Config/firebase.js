import  firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyB9ctfMAAYJBmKHeFyBHV3ha0qCoVR63Qs",
    authDomain: "redux-firebase-24bab.firebaseapp.com",
    projectId: "redux-firebase-24bab",
    storageBucket: "redux-firebase-24bab.appspot.com",
    messagingSenderId: "440138205080",
    appId: "1:440138205080:web:5fd526ff0aeab295d04ded",
    measurementId: "G-24SJ9HF1J6"
};

firebase.initializeApp(firebaseConfig);
export default firebase 
