// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4SXD7k7HVqCpVb96MJ8r8mBvK6a89Qt8",
  authDomain: "firecontactapp-a7fac.firebaseapp.com",
  databaseURL: "https://firecontactapp-a7fac-default-rtdb.firebaseio.com",
  projectId: "firecontactapp-a7fac",
  storageBucket: "firecontactapp-a7fac.appspot.com",
  messagingSenderId: "643797763094",
  appId: "1:643797763094:web:2e3fbfdda26f0f450ee137",

  //   apiKey: process.env.REACT_APP_apiKey,
  //   authDomain: process.env.REACT_APP_authDomain,
  //   databaseURL: process.env.REACT_APP_databaseURL,
  //   projectId: process.env.REACT_APP_projectId,
  //   storageBucket: process.env.REACT_APP_storageBucket,
  //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
  //   appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
