import React, { useState, useEffect, useContext, createContext } from "react";
import Server from "server";

type User = {
  email: String;
  id: String;
}

type Auth = {
  loggedIn: boolean;
  user?: User;
}

type UserSignInData = {
  email: String;
  password: String;
}

type UserSignUpData = {
  name: String;
  email: String;
  password: String;
}

type DataAuth = {
  auth: Auth,
  signIn: (user: UserSignInData) => Promise<string>|Promise<void>,
  signUp: (user: UserSignUpData) => Promise<string>|Promise<void>,
  logOut: () => void,
}

type Props = {
  children: React.ReactNode;
};

const contextDefaultValues: DataAuth = {
  auth: {loggedIn: false},
  signIn: async (user: UserSignInData) => {},
  signUp: async (user: UserSignUpData) => {},
  logOut: () => {}
};

const AuthContext = createContext<DataAuth>(contextDefaultValues);

function useAuth(): DataAuth {
  return useContext(AuthContext);
}


const defaultAuthState: Auth = {
  loggedIn: false
};

const AuthProvider = ({ children }: Props): JSX.Element => {

  console.log("soy el provider auth");
  
  const [auth, setAuth] = useState(defaultAuthState);

  const signIn = async (user: UserSignInData) => {

    const response = await Server.signIn(user);

    console.log(response.data);

    if (!response.data.error) {
      setAuth({
        loggedIn: true,
        user: {
          email: response.data.user.email,
          id: response.data.user.id
        }
      });
      localStorage.setItem('accessToken', response.data.accessToken);
      return null;
    }else{
      setAuth({
        loggedIn: false
      });
      return response.data.error;
    }

  }

  const signUp = async (user: UserSignUpData) => {

    const response = await Server.signUp(user);

    console.log(response.data);

    if (!response.data.error) {
      setAuth({
        loggedIn: true,
        user: {
          email: response.data.user.email,
          id: response.data.user.id
        }
      });
      localStorage.setItem('accessToken', response.data.accessToken);
      return null;
    }else{
      setAuth({
        loggedIn: false
      });
      return response.data.error;
    }

  }

  const logOut = () => {
    localStorage.removeItem('accessToken');
    setAuth({
      loggedIn: false
    });
  }

  useEffect(() => {

    Server.authentication()
      .then((response) => {
        console.log(response.data);
        if (!response.data.error) {
          setAuth({
            loggedIn: true,
            user: {
              email: response.data.user.email,
              id: response.data.user.id
            }
          });
        } else {
          setAuth({
            loggedIn: false
          });
        }
      })
      .catch((error) => {
        //aca se deben manejar mejor los errores
        console.log(error);
        setAuth({
          loggedIn: false
        });
      });

  }, [])

  const data = {auth, signIn, signUp, logOut };

  return (
    <AuthContext.Provider
      value = { data }
    >
      {children}
    </AuthContext.Provider>
  );
};

type AuthInit = {
  loading: boolean;
  auth?: Auth;
}

const stateInitial: AuthInit = {
  loading: true
};

function useAuthInit(): AuthInit {

  console.log("soy el authinit");

  const [authInit, setAuthInit] = useState<AuthInit>({ loading: true});

  useEffect(() => {

    Server.authentication()
    .then((response) => {
      console.log(response.data);
      if (!response.data.error) {
        setAuthInit({
          loading: false,
          auth: {
            loggedIn: true,
            user: {
              email: response.data.user.email,
              id: response.data.user.id
            }
          }
        });
      } else {
        setAuthInit({
          loading: false,
          auth: {
            loggedIn: false,
          }
        });
      }
    })
    .catch((error) => {
      //aca se deben manejar mejor los errores
      console.log(error);
      setAuthInit({
        loading: false,
        auth: {
          loggedIn: false,
        }
      });
    });

  }, []);

  return authInit;
}

export {AuthProvider, useAuth, useAuthInit}
