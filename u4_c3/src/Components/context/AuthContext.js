import axios from "axios";
import React, { useState } from "react";

 const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (email, password) => {
    //  api request to reqres.in for the token
    console.log(email)
    console.log(password);
    axios.post('https://regres.in/api/login', {
      'email' : email,
      'password': password,
  }).then(res => setToken(res.data.token));

  };
  const handleLogout = () => {
    //  set token back to " " once logged out
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
