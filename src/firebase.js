import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1b4QkAQ5ccfTky8CjwS2--pamdQOBOck",
  authDomain: "beknazar-0220.firebaseapp.com",
  projectId: "beknazar-0220",
  storageBucket: "beknazar-0220.appspot.com",
  messagingSenderId: "482453081938",
  appId: "1:482453081938:web:ac433f437f122bef5ab48b",
  measurementId: "G-Y2LYXRD9MJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
