// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKIGOGEsqEKyNn4ODf1lrgTc43S0Q_I3o",
  authDomain: "convoy-1007.firebaseapp.com",
  projectId: "convoy-1007",
  storageBucket: "convoy-1007.firebasestorage.app",
  messagingSenderId: "458534655263",
  appId: "1:458534655263:web:5128efb71dd6c860074c2a",
  measurementId: "G-PLE2YPMC09"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
