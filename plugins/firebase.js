import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAidpcr23ODUhzrMzVwGs4Ah29Ct3UZvv8",
    authDomain: "fir-pj-dd498.firebaseapp.com",
    projectId: "fir-pj-dd498",
    storageBucket: "fir-pj-dd498.appspot.com",
    messagingSenderId: "67664062296",
    appId: "1:67664062296:web:056808547482b17aec672d",
    measurementId: "G-Q8TELKB2NH",
  });
}

export default firebase;