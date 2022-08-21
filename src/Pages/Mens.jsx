import React from "react";
import CarouselComponent from "../Components/CarouselComponent";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { mensData } from "../Redux/Mens/mens.actions";

const Mens = () => {
  const mens = useSelector((state) => state.mensReducer);
  const dispatch = useDispatch;
  console.log(mens);
  useEffect(() => {
    dispatch(mensData());
  });
  const sliderData = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1467843182948-36a9b559865e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Offer 1",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1550246140-29f40b909e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Offer 2",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Offer 3",
    },
  ];
  return (
    <div>
      <Navbar />
      <CarouselComponent sliderData={sliderData} />
      <ProductCard />
      <Footer />
    </div>
  );
};

export default Mens;
