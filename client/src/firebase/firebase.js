import firebase from "firebase/app"
import "firebase/auth"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDwvoe_HhYGhAqFEdZYR2OYi8jM_V8aPnc",
    authDomain: "weekendplanner-7a85f.firebaseapp.com",
    databaseURL: "https://weekendplanner-7a85f.firebaseio.com",
    projectId: "weekendplanner-7a85f",
    storageBucket: "weekendplanner-7a85f.appspot.com",
    messagingSenderId: "575676897778"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const auth = firebase.auth();

export {
    auth,
}
