import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7H3qMhPeJysiemmebcgj5kYF-dUMeQ6Y",
  authDomain: "reactnative-5a400.firebaseapp.com",
  projectId: "reactnative-5a400",
  storageBucket: "reactnative-5a400.appspot.com",
  messagingSenderId: "415043193477",
  appId: "1:415043193477:web:983bb414931ca99cdab7ec",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);