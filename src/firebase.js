import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyCCLH004JE0yXNeec58lvbsOX0RYe55e9E",
  authDomain: "crud-vuejs-9d6d6.firebaseapp.com",
  databaseURL: "https://crud-vuejs-9d6d6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-vuejs-9d6d6",
  storageBucket: "crud-vuejs-9d6d6.appspot.com",
  messagingSenderId: "990531043327",
  appId: "1:990531043327:web:dd96691d1a2c655fcd71ca",
  measurementId: "G-44Z0NQHMLB"
  };
  
  firebase.initializeApp(config);
  
  export default firebase.firestore();