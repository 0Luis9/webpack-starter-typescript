import firebase from 'firebase/app';
import 'firebase/firestore';


 const firebaseConfig = {
    apiKey: "AIzaSyCGmeA0fdvMZHTaF3TaaRbRgKgAli6kyDc",
    authDomain: "sql-demos-14dcf.firebaseapp.com",
    projectId: "sql-demos-14dcf",
    storageBucket: "sql-demos-14dcf.appspot.com",
    messagingSenderId: "869110904768",
    appId: "1:869110904768:web:b372f014e160d51684ba25",
    measurementId: "G-JBGZQS7KYP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log('Firebase configurado')

  export default firebase.firestore();