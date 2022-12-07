// import { AuthProvider } from "firebase/auth";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  User,
  // signInWithEmailAndPassword,
} from "firebase/auth";

import Router from "next/router";
import { auth } from "../services/firebase";

// type User = {
//   // uid: string | null
//   email: string | null;
//   name: string | null;
//   token: string | null;
//   provider: string | undefined;
//   image: string | null;
// };

type AuthContextData = {
  user?: User | null;
  signInWithGoogle: any;
  // signInEmailPassword: (email: string, password: string) => Promise<void>;
  // setUser: any;
  // changeStore: string;
  // setChangeStore: any;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        Router.push("/homepage");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
