import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCcqAkylsPtvjHkCCmJWnqimOEKXzqhyQI",
  authDomain: "olx-clone-7f669.firebaseapp.com",
  projectId: "olx-clone-7f669",
  storageBucket: "olx-clone-7f669.appspot.com",
  messagingSenderId: "367994481150",
  appId: "1:367994481150:web:1cdb1eacb4e493f72e78af",
};

export default firebase.initializeApp(firebaseConfig);
