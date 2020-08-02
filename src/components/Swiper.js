import React, { useState } from 'react';
import 'swiper/swiper.scss';
import Swiper from 'react-id-swiper';
import '../styles/swiper.css';

// images
import image1 from '../assets/arroz_mixto.jpg';
import image2 from '../assets/chop_suey.jpg';
import image4 from '../assets/combo_kaloc.jpg';
// slider config
const HeroSliderConfigs = {
  containerClass: 'swiper-container hero-slider',
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  effect: 'slide',
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
  }
};

// slider component
const HeroSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image1} alt="image1"></img>
        </div>
        
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2"></img>
        </div>
        
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image4} alt="image3"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <p style={{color: 'transparent'}}>
          ab quia neque, porro laborum error, autem facilis voluptates
          ab quia neque, porro laborum error, autem facilis voluptates
            ab quia neque, porro laborum error, autem facilis voluptates
          </p>
        </div>
      </div>
    </Swiper>
  );
};

export default HeroSlider;
