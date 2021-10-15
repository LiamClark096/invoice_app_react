import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCCsVu49Mp1Sn9uQrcQrsQe4IV9FXYyOPw",
  authDomain: "rweb-18.firebaseapp.com",
  databaseURL: "https://rweb-18-default-rtdb.firebaseio.com",
  projectId: "rweb-18",
  storageBucket: "rweb-18.appspot.com",
  messagingSenderId: "318364866262",
  appId: "1:318364866262:web:2345f02b8cd40a05dc1b77",
  measurementId: "G-WD6X079SY6",
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
