import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userInfo = useSelector((store) => store.user.userInfo);
  
  return userInfo?.email ? children : <Navigate to="/" />;
};

export default PrivateRoute;
