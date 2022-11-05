import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKLK9TuC_DsItYS_-IPO6_UFEjbMlb-2Y",
  authDomain: "babel-libreria.firebaseapp.com",
  projectId: "babel-libreria",
  storageBucket: "babel-libreria.appspot.com",
  messagingSenderId: "304081761172",
  appId: "1:304081761172:web:896130b0eda665183a1581"
};


const app = initializeApp(firebaseConfig);

export const baseDatos = getFirestore(app);