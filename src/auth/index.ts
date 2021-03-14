import React, { useContext, useEffect, useState } from 'react';

interface Auth {
  loggedIn: boolean;
  userId?: string;
}

interface AuthInit {
  loading: boolean;
  auth?: Auth;
}

export const AuthContext = React.createContext<Auth>({ loggedIn: false });

export function useAuth(): Auth {
  return useContext(AuthContext);
}

export function useAuthInit(): AuthInit {

    const [authInit, setAuthInit] = useState<AuthInit>({ loading: true });

    useEffect(() => {
      
    }, []);

    return authInit;
  }
  
