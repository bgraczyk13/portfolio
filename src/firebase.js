import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJRiQxSj_pZkj2WBfJj9seo5a_lnYuaw0",
  authDomain: "react-portfolio-2f07e.firebaseapp.com",
  projectId: "react-portfolio-2f07e",
  storageBucket: "react-portfolio-2f07e.appspot.com",
  messagingSenderId: "876330403930",
  appId: "1:876330403930:web:0eb702556f8f8467773063",
  measurementId: "G-N1R9BFPD2F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
