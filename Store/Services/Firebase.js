import firebase from 'react-native-firebase';

/*
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCzZWp-MmfvTYKx980iOB4DtyzLaaI6X38",
  authDomain: "clone-instagram-cd240.firebaseapp.com",
  databaseURL: "https://clone-instagram-cd240.firebaseio.com",
  projectId: "clone-instagram-cd240",
  storageBucket: "clone-instagram-cd240.appspot.com",
  messagingSenderId: "400683359433"
};
firebase.initializeApp(config);
*/
export const authentication = firebase.auth();
export const dataBase = firebase.database();