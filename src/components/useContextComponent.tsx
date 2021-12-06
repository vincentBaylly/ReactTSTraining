import React, { useState, useContext } from "react";

//AuthContext.tsx
const AuthContext = React.createContext({
  auth: false,
  login: () => {},
  logout: () => {},
});

//Loginin.tsx
const LogIn = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <button onClick={auth.login}>Login</button>
    </>
  );
};

//Logout.tsx
const LogOut = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <button onClick={auth.logout}>Click To Logout</button>
    </>
  );
};

const App = () => {
  const [auth, setAuth] = useState(false);
  const login = () => {
    setAuth(true);
  };
  const logout = () => {
    setAuth(false);
  };
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{ auth: auth, login: login, logout: logout }}
      >
        <p>{auth ? "Hi! You are Logged In" : "Oope! Kindly Login"}</p>
        <LogIn />
        <LogOut />
      </AuthContext.Provider>
    </React.Fragment>
  );
};
