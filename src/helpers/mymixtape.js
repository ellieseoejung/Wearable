//FIRE stuff
import * as firebase from 'firebase';


// Initialize Firebase // console -> ProjectWearable
var config = {
    apiKey: "AIzaSyDwcio3GDQTdNu3Oajl8q0pbhtpL4WmtNI",
    authDomain: "projectwearable-c2f1e.firebaseapp.com",
    databaseURL: "https://projectwearable-c2f1e.firebaseio.com",
    projectId: "projectwearable-c2f1e",
    storageBucket: "projectwearable-c2f1e.appspot.com",
    messagingSenderId: "37455862691"
  };
  firebase.initializeApp(config);

export default firebase;
