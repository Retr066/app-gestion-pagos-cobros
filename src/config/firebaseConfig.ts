import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAm2NOSNevhyi-v0RQPrL0Y6hb0J8REMiY",
  authDomain: "react-navite-c3475.firebaseapp.com",
  projectId: "react-navite-c3475",
  storageBucket: "react-navite-c3475.appspot.com",
  messagingSenderId: "215278718106",
  appId: "1:215278718106:web:216972588721992bb6a323",
};

const app = initializeApp(firebaseConfig);

export default app;
