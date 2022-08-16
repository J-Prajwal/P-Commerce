import { Navigate } from "react-router-dom";
import { getItem } from "../Utils/localStorage";

export const RequiredAuth = ({ children }) => {
  const userData = getItem("user");
  const token = userData.token;
  return !!token ? <div>{children}</div> : <Navigate to={"/signin"}></Navigate>;
};
