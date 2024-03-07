import { initializeApp } from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZfsc9wqdj-QDQZuNlMk_Covn5AoFXcVw",
  authDomain: "e-commerce-web-128d8.firebaseapp.com",
  projectId: "e-commerce-web-128d8",
  storageBucket: "e-commerce-web-128d8.appspot.com",
  messagingSenderId: "347934539542",
  appId: "1:347934539542:web:643a61f4c8cf310e97da37",
  measurementId: "G-XCDNZ8EV8C",
  databaseURL: "https://e-commerce-web-128d8-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export default firebaseApp;
