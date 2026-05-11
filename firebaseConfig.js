import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5TIgsT_gquxke1y_ul1u9XL5VE5Vpqbw",
  authDomain: "controlgastosapp-2217f.firebaseapp.com",
  projectId: "controlgastosapp-2217f",
  storageBucket: "controlgastosapp-2217f.firebasestorage.app",
  messagingSenderId: "1009092772130",
  appId: "1:1009092772130:web:84d9b04280b06205fbe57b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);