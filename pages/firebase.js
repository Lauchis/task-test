// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoTRch1VwFmslDgddG60Fr8SXlvGvNmO0",
  authDomain: "todo-41b6d.firebaseapp.com",
  projectId: "todo-41b6d",
  storageBucket: "todo-41b6d.appspot.com",
  messagingSenderId: "544877399080",
  appId: "1:544877399080:web:927f8fefd560f330bc791d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 export default { firebase };
// const app = initializeApp(firebaseConfig);