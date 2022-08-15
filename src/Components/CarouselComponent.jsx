import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ sliderData }) => {
  return (
    <Carousel
      centerMode={true}
      centerSlidePercentage={"50"}
      emulateTouch={true}
      infiniteLoop={true}
      swipeable={true}
      autoPlay={true}
      stopOnHover={true}
      interval={3000}
      dynamicHeight={true}
    >
      {sliderData?.map((data) => (
        <div>
          <img src={data.imgUrl} />
          <p className="legend">{data.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
