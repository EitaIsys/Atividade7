import * as firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.firestore();