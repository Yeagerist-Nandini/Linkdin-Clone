// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW0WPAkUYSTpS3M8u6_AUCqxP_o6hvoEM",
  authDomain: "linkdin2-a3607.firebaseapp.com",
  projectId: "linkdin2-a3607",
  storageBucket: "linkdin2-a3607.appspot.com",
  messagingSenderId: "98681855249",
  appId: "1:98681855249:web:d3fe0b60b1565042ed00b0",
  measurementId: "G-M6ERS0C1P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth = getAuth();

export {db,auth}