import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC85je2mzHM5GKAz6gkuB2_0Rts5dejfa0",
  authDomain: "shopping-1dac0.firebaseapp.com",
  projectId: "shopping-1dac0",
  storageBucket: "shopping-1dac0.appspot.com",
  messagingSenderId: "913968748702",
  appId: "1:913968748702:web:79df3a9860eae99edbc38f",
};

const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase);
