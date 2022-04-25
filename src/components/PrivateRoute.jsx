import { useContext } from "react";
import {} from "react-router-dom";
import { LoginContext } from "./context/loginContext";

export const protectedRoute = () => {
  const { isAuth } = useContext(LoginContext);
  if (!isAuth) {
    return <Navigate to="/login"></Navigate>;
  }
};
