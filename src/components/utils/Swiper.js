import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import image1 from "../../assets/arroz_mixto.jpg";
import image2 from "../../assets/chop_suey.jpg";
import image3 from "../../assets/combo_kaloc.jpg"; 
import image4 from "../../assets/cafe4.jpg"; 
const SimpleSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <Fragment>
      <div style={{ width: "100%",marginBottom:"2em",background:"transparent" }}>
        <Slider {...settings}>
          <img src={image1} width='100%' alt='img1' />
          <img src={image2} width='100%' alt='img2' />
          <img src={image3} width='100%' alt='img4' />
          <img src={image4} width='100%' alt='img4' />
        </Slider>
      </div>
    </Fragment>
  );
};

export default SimpleSlider;
