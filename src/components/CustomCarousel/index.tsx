import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomCarousel.styles.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CarCard from "../CarCard";

type IArrow = {
  onClick?: () => {};
};

const ArrowLeft = ({ onClick }: IArrow) => {
  return (
    <div className={`arrow-container left`} onClick={onClick}>
      <ArrowBackIcon sx={{ color: "white" }} />
    </div>
  );
};
const ArrowRight = ({ onClick }: IArrow) => {
  return (
    <div className={`arrow-container right`} onClick={onClick}>
      <ArrowForwardIcon sx={{ color: "white" }} />
    </div>
  );
};

const CustomCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Slider>
    </div>
  );
};

export default CustomCarousel;
