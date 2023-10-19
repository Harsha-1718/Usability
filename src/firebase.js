
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBchmuiwqxJ3pz2e5GM8s4X8nDXMsd3Vnw",
  authDomain: "usability-c13fc.firebaseapp.com",
  projectId: "usability-c13fc",
  storageBucket: "usability-c13fc.appspot.com",
  messagingSenderId: "598051158322",
  appId: "1:598051158322:web:fd62ae22941e9dcb17bf2b"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);