import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBcj7KlvAb9nHwpFXBCTyfX9yE2zeutsys",
    authDomain: "foods-4816b.firebaseapp.com",
    databaseURL: "https://foods-4816b.firebaseio.com",
    projectId: "foods-4816b",
    storageBucket: "foods-4816b.appspot.com",
    messagingSenderId: "418707407018",
    appId: "1:418707407018:web:bcdd27b5aee920262250d3",
    measurementId: "G-KS8WPDCEGX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  export const firestore = firebase.firestore()
  export default firebase