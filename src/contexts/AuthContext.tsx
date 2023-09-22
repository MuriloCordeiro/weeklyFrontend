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
import { Toast } from "@chakra-ui/react";

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
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const cookies = parseCookies();
  const [loading, setIsLoading] = useState();
  const CLIENT_TOKEN: any = process.env.NEXT_PUBLIC_CLIENT_TOKEN;
  const COOKIE_MAX_AGE: any = process.env.NEXT_PUBLIC_CLIENT_MAX_AGE;
  const userToken = cookies["userLogin"];

  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();

      const response = await signInWithPopup(auth, provider);

      if (response) {
        const login: any = response.user.email;
        console.log("response", response.user.email);
        setCookie(undefined, "userLogin", login, {
          maxAge: COOKIE_MAX_AGE,
          path: "/",
        });
        Router.push("/homepage");
      }
      // signInWithPopup(auth, provider)
      //   .then((result) => {
      //     console.log("result", result);
      //     setUser(result.user.email);
      //     if (result.user.email) {
      //       // setToken(result.user.uid);
      //       setIsAuthenticated(true);
      //       setCookie(undefined, "userLogin", user.toString(), {
      //         maxAge: COOKIE_MAX_AGE,
      //         path: "/",
      //       });
      //       Router.push("/homepage");
      //     } else {
      //       setIsAuthenticated(false);
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    } catch (err) {
      console.error("erro ao logar", err);
    }
  }

  function signInEmailPassword(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user.email);
        if (result.user.email) {
          setIsAuthenticated(true);
          setCookie(undefined, CLIENT_TOKEN, user.toString(), {
            maxAge: COOKIE_MAX_AGE,
            path: "/",
          });

          // Router.push("/homepage");
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
  useEffect(() => {
    !userToken && Router.push("/");
  }, [userToken]);

  return (
    <AuthContext.Provider
      value={{
        signInEmailPassword,
        user,
        signInWithGoogle,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
