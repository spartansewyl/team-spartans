// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmlzWMyPcjarO78S2YWnLFtNYZPZ6Pp4o",
  authDomain: "clone-c9a92.firebaseapp.com",
  projectId: "clone-c9a92",
  storageBucket: "clone-c9a92.appspot.com",
  messagingSenderId: "550036778932",
  appId: "1:550036778932:web:f8b5f942820794ff1bcce1",
  measurementId: "G-1K6RPZ3727",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
