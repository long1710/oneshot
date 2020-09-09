import app from 'firebase/app';
import 'firebase/database';
import 'firebase/firebase-firestore';
import 'firebase/firebase-storage';
import 'firebase/functions';

const config = {
    apiKey: "AIzaSyDAeIJgL-eO8piuiv4vWQQmiqdDGhsWPq0",
    authDomain: "oneshot-e4f2e.firebaseapp.com",
    databaseURL: "https://oneshot-e4f2e.firebaseio.com",
    projectId: "oneshot-e4f2e",
    storageBucket: "oneshot-e4f2e.appspot.com",
    messagingSenderId: "235039806690",
    appId: "1:235039806690:web:ff3debe508aada65433abb",
    measurementId: "G-NDT3FPVPZY"
};
 
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    this.firestore = app.firestore();
    this.storage = app.storage();
  }

  getFS() {
      return this.firestore;
  }
}
 
export default Firebase;