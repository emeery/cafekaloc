import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/gallery1/escape1.jpg";
// import image2 from "../../assets/gallery1/escape2.jpg";
// import image3 from "../../assets/gallery1/escape3.jpg";
// import image4 from "../../assets/gallery1/escape4.jpg";
 
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
        </Slider>
      </div>
    </Fragment>
  );
};

export default SimpleSlider;
