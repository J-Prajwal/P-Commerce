import { Heading } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ShopByCategories from "../Components/ShopByCategories";

const Womens = () => {
  return (
    <div>
      <Navbar />
      <Heading mt={10}>Womens</Heading>
      <ShopByCategories />
      <Footer />
    </div>
  );
};

export default Womens;
