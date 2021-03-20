import React, { useState, useEffect, useContext, createContext } from "react";
import Server from "server";

type Auth = {
  loggedIn: boolean;
  userId?: string;
}

type AuthInit = {
  loading: boolean;
  auth?: Auth;
}

const contextDefaultValues: Auth = {
  loggedIn: false
};

export const AuthContext = createContext<Auth>(contextDefaultValues);

export function useAuth(): Auth {
  return useContext(AuthContext);
}

export function useAuthInit(): AuthInit {

    let auth: Auth = { loggedIn: false};
    const [authInit, setAuthInit] = useState<AuthInit>({ loading: true, auth});

    useEffect(() => {

      Server.authentication()
      .then((response) => {
        if (!response.data.error) {
          auth = { loggedIn: true}
          setAuthInit({ loading: false, auth})
          console.log(response.data);
        } else {
          auth = { loggedIn: false}
          setAuthInit({ loading: false, auth})
          console.log(response.data.error)
        }
      })
      .catch((error) => {
        console.log(error);
      });

    }, []);

    return authInit;
  }


type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props): JSX.Element => {

  const [loggedIn, setloggedIn] = useState<boolean>(contextDefaultValues.loggedIn)

  return (
    <AuthContext.Provider
      value={{
        loggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

  
