import React, { createContext, useState } from "react";

import usePersistedState from '../helpers/usePersistedState.js';

const AuthContext = createContext(undefined);
const AuthDispatchContext = createContext(undefined);

const initialStateAuth = {
  email: "",
  accountType: "",
  token: null,
};

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = usePersistedState("auth", initialStateAuth);

  return (
    <AuthContext.Provider value={authData}>
      <AuthDispatchContext.Provider value={setAuthData}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, AuthDispatchContext, initialStateAuth };
