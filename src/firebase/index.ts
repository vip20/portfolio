import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC8kCJSDFliNfSL8PEu-ojdXN2v5DyDP8",
  authDomain: "vinay-portfolio-28eab.firebaseapp.com",
  databaseURL: "https://vinay-portfolio-28eab.firebaseio.com",
  projectId: "vinay-portfolio-28eab",
  storageBucket: "vinay-portfolio-28eab.appspot.com",
  messagingSenderId: "925274460026",
  appId: "1:925274460026:web:f24e5b3469a0ffe506d0c3",
  measurementId: "G-LHMEK7TRST",
};
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage().ref();
