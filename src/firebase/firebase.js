import * as firebase from "firebase";

const  config = {
    apiKey: "AIzaSyDV03Z9zEAhM1vDRTUKXAhB6oJL0LWLl1M",
    authDomain: "test-v1-673ee.firebaseapp.com",
    databaseURL: "https://test-v1-673ee.firebaseio.com/",
    // storageBucket: "<BUCKET>.appspot.com",
  };

firebase.initializeApp(config);

const db = firebase.database();

export default db;