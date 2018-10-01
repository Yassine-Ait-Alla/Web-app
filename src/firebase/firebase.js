import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



const config = {
    apiKey: "AIzaSyBjUUXEHq8CGT4YBYKkBJeYbv2yWcZ4wYs",
    authDomain: "web-app-project-59c9e.firebaseapp.com",
    databaseURL: "https://web-app-project-59c9e.firebaseio.com",
    projectId: "web-app-project-59c9e",
    storageBucket: "",
    messagingSenderId: "875492875654"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export {
  db,
  auth
};
