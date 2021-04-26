import React, { useState, createContext } from "react";
import Server from "server";

type User = {
  email: string;
  id: string;
};

type Auth = {
  loggedIn: boolean;
  initialized: boolean;
  user?: User;
};

type UserSignInData = {
  email: string;
  password: string;
};

type UserSignUpData = {
  name: string;
  email: string;
  password: string;
};

type DataAuth = {
  auth: Auth;
  loading: boolean;
  signIn: (user: UserSignInData) => Promise<string> | Promise<void>;
  signUp: (user: UserSignUpData) => Promise<string> | Promise<void>;
  initialize: () => Promise<void>;
  logOut: () => void;
};

type Props = {
  children: React.ReactNode;
};

const contextDefaultValues: DataAuth = {
  auth: {
    loggedIn: false,
    initialized: false,
  },
  loading: false,
  signIn: async (user: UserSignInData) => {},
  signUp: async (user: UserSignUpData) => {},
  initialize: async () => {},
  logOut: () => {},
};

const AuthContext = createContext<DataAuth | undefined>(contextDefaultValues);

const defaultAuthState: Auth = {
  loggedIn: false,
  initialized: false,
};

export const AuthProvider = ({ children }: Props): JSX.Element => {
  console.log("soy el provider auth");

  const [auth, setAuth] = useState(defaultAuthState);
  const [loading, setLoading] = useState(false);

  const signIn = async (user: UserSignInData) => {
    setLoading(true);
    const response = await Server.signIn(user);
    console.log("funcion logearse en el auth");

    console.log(response.data);

    if (!response.data.error) {
      localStorage.setItem("accessToken", response.data.accessToken);
      setAuth({
        loggedIn: true,
        initialized: true,
        user: {
          email: response.data.user.email,
          id: response.data.user.id,
        },
      });
      setLoading(false);
      return null;
    } else {
      setAuth({
        loggedIn: false,
        initialized: true,
      });
      setLoading(false);
      return response.data.error;
    }
  };

  const signUp = async (user: UserSignUpData) => {
    setLoading(true);

    const response = await Server.signUp(user);

    console.log(response.data);

    if (!response.data.error) {
      localStorage.setItem("accessToken", response.data.accessToken);
      setAuth({
        loggedIn: true,
        initialized: true,
        user: {
          email: response.data.user.email,
          id: response.data.user.id,
        },
      });
      setLoading(false);
      return null;
    } else {
      setAuth({
        loggedIn: false,
        initialized: true,
      });
      setLoading(false);
      return response.data.error;
    }
  };

  const logOut = async () => {
    setLoading(true);
    localStorage.removeItem("accessToken");
    setAuth({
      loggedIn: false,
      initialized: true,
    });
    setLoading(false);
    return null;
  };

  const initialize = async () => {
    console.log("funcion inicializar en el auth");

    Server.authentication()
      .then((response) => {
        console.log(response.data);
        if (!response.data.error) {
          setAuth({
            loggedIn: true,
            initialized: true,
            user: {
              email: response.data.user.email,
              id: response.data.user.id,
            },
          });
        } else {
          setAuth({
            loggedIn: false,
            initialized: true,
          });
        }
      })
      .catch((error) => {
        //aca se deben manejar mejor los errores
        console.log(error);
        setAuth({
          loggedIn: false,
          initialized: true,
        });
      });
  };

  const data = { auth, loading, signIn, signUp, logOut, initialize };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);
