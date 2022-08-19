import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getItem } from "../Utils/localStorage";

export const RequiredAuth = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useSelector((state) => state.authReducer);
  if (!isAuth) {
    return <Navigate to={"/signin"} state={{ from: location }} />;
  }
  return children;
  //   const userData = getItem("user");
  //   console.log(userData, location);
  //   if (userData != undefined) {
  //     const token = userData.token;
  //     if (!!token) {
  //       return children;
  //     } else {
  //       <Navigate to={"/signin"} state={{ from: location }} replace />;
  //     }
  //   } else {
  //     // <Navigate to={"/signin"} state={{ from: location }} replace />;
  //     navigate("/signin");
  //   }
  //   const userData = getItem("user");
  //   const token = userData.token;
  //   return token==undefined ? <div>{children}</div> : <Navigate to={"/signin"}></Navigate>;
};
