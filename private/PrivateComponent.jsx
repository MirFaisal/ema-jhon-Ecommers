import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/UserContext";
import Loading from "../src/components/loading/Loading";

const PrivateComponent = ({ children }) => {
  const { user, isLoading } = useContext(authContext);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (user && user.uid) {
    return <>{children}</>;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateComponent;
