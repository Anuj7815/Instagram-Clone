// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZDTMMEjwtBR0Cf8YIeaOAjqGVNqy9ab0",
    authDomain: "instagram-clone-e782e.firebaseapp.com",
    projectId: "instagram-clone-e782e",
    storageBucket: "instagram-clone-e782e.firebasestorage.app",
    messagingSenderId: "824564367836",
    appId: "1:824564367836:web:09ca2b49342ab7a10d4f19",
    measurementId: "G-6J7T98JC76",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
