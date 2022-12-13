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
  signInWithEmailAndPassword,
  // signInWithEmailAndPassword,
} from "firebase/auth";

import Router from "next/router";
import { auth } from "../services/firebase";
import { destroyCookie, parseCookies, setCookie } from "nookies";

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
  isAuthenticated: any;
  signInEmailPassword: any;
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
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const cookies = parseCookies();

  const CLIENT_TOKEN: any = process.env.NEXT_PUBLIC_CLIENT_TOKEN;
  const COOKIE_MAX_AGE: any = process.env.NEXT_PUBLIC_CLIENT_MAX_AGE;

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user.uid);
        setUser(result.user);
        if (user) {
          // setToken(result.user.uid);
          setIsAuthenticated(true);
          setCookie(undefined, CLIENT_TOKEN, user.uid, {
            maxAge: COOKIE_MAX_AGE,
            path: "/",
          });
          Router.push("/homepage");
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function signInEmailPassword(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        if (user) {
          setIsAuthenticated(true);
          setCookie(undefined, CLIENT_TOKEN, user.uid, {
            maxAge: COOKIE_MAX_AGE,
            path: "/",
          });
          Router.push("/homepage");
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        console.log("erroooor", error);
      });
  }

  // function setSessionCookie(isAuthenticated: boolean) {
  //   if (isAuthenticated) {

  //   } else {
  //     destroyCookie(undefined, CLIENT_TOKEN);
  //   }
  // }

  return (
    <AuthContext.Provider
      value={{ signInEmailPassword, user, signInWithGoogle, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
