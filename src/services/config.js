
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

//"AIzaSyD7y-wSKpEIV0vnEZHhk3Iea6vPS0N-aZo"
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "joker-games-b356e.firebaseapp.com",
    projectId: "joker-games-b356e",
    storageBucket: "joker-games-b356e.appspot.com",
    messagingSenderId: "160364702390",
    appId: "1:160364702390:web:040cb402c67ab730e59417"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);