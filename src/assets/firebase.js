import firebase from "firebase";

export const initializeFirebase = () => {
  const config = {
    apiKey: "AIzaSyC6yx0S8OSzAZiXx4HjOcCGQhU_4SFGBlI",
    authDomain: "mysporttracker-4ee19.firebaseapp.com",
    databaseURL: "https://mysporttracker-4ee19.firebaseio.com",
    projectId: "mysporttracker-4ee19",
    storageBucket: "mysporttracker-4ee19.appspot.com",
    messagingSenderId: "229707701649"
  };
  firebase.initializeApp(config);
}
