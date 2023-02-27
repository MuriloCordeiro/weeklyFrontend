import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
// };

const firebaseConfig: any = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // messaginSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseCredentials);
// }

// export default firebase;
