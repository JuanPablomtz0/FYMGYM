import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyByX89OQiuPM81Pdw8_yFib-PXPSr-tPK0",
  authDomain: "fym-gym.firebaseapp.com",
  databaseURL: "https://fym-gym-default-rtdb.firebaseio.com",
  projectId: "fym-gym",
  storageBucket: "fym-gym.appspot.com",
  messagingSenderId: "1037342239799",
  appId: "1:1037342239799:web:3cf88d659d330a4638a3b2",
  measurementId: "G-BY1LLBWDS9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {db};