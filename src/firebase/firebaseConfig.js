// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLDxPdItAb-6s_TDHMh7-wKGEtpn6xc3Y",
  authDomain: "vod-koinonia.firebaseapp.com",
  projectId: "vod-koinonia",
  storageBucket: "vod-koinonia.appspot.com",
  messagingSenderId: "819898281723",
  appId: "1:819898281723:web:7d3337df625c42c8604a5e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };