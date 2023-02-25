import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC63YseEPi0tRQxqv2dLIEL6sZRp32OdLU",
    authDomain: "chatgpt-clone-6d1b8.firebaseapp.com",
    projectId: "chatgpt-clone-6d1b8",
    storageBucket: "chatgpt-clone-6d1b8.appspot.com",
    messagingSenderId: "843879518207",
    appId: "1:843879518207:web:b1aea6b51b8315faf6e1ca"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
