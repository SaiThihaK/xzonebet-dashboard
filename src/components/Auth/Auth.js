import React from "react";
import { Navigate , Route } from "react-router-dom";
const Auth = ({ children}) => {
  const isAuthenticated = localStorage.getItem("status");
  return (
    isAuthenticated === "success" ? children : <Navigate to="/login" />
  );
};

export default Auth;
