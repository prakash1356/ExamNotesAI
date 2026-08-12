
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examsai-c4cee.firebaseapp.com",
  projectId: "examsai-c4cee",
  storageBucket: "examsai-c4cee.firebasestorage.app",
  messagingSenderId: "626418027027",
  appId: "1:626418027027:web:b87fc7d2c0ca2b6dfc4de6",
  measurementId: "G-19E22BXTRZ"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()
// 👇 YEH LINE ADD KARO
provider.setCustomParameters({
  prompt: "select_account"
});

export { auth, provider }