import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDVfzVA8xSdtD-5qkhwbQzKPQsJnA3l5DQ",
    authDomain: "weatherappdemo-130e1.firebaseapp.com",
    databaseURL: "https://weatherappdemo-130e1.firebaseio.com",
    projectId: "weatherappdemo-130e1",
    storageBucket: "",
    messagingSenderId: "78476221187"
};
export const firebaseApp = firebase.initializeApp(config);