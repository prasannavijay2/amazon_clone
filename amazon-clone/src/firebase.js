import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArY4iYGiPL9ghE8CmdjaKZV27Yrvp-m7s",
  authDomain: "clone-99369.firebaseapp.com",
  databaseURL: "https://clone-99369.firebaseio.com",
  projectId: "clone-99369",
  storageBucket: "clone-99369.appspot.com",
  messagingSenderId: "896459431252",
  appId: "1:896459431252:web:cb4dded99c59cf5ea5fcc1",
  measurementId: "G-CF1LT9B8HN",
});

const auth = firebase.auth();

export { auth };
