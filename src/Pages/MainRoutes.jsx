import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
// import { RequiredAuth } from "../Hoc/RequiredAuth";
import Details from "./Details";
import Error from "./error";
import Home from "./Home";
import Kids from "./Kids";
import Mens from "./Mens";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Womens from "./Womens";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Mens" element={<Mens />}></Route>
      <Route path="/Mens/:id" element={<Details />}></Route>
      <Route path="/Womens" element={<Womens />}></Route>
      <Route path="/Womens/:id" element={<Details />}></Route>
      <Route path="/Kids" element={<Kids />}></Route>
      <Route path="/Kids/:id" element={<Details />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/error" element={<Error />}></Route>
    </Routes>
  );
};

export default MainRoutes;
