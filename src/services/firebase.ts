import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseCredentials);
// }

// export default firebase;
