import React, { useState, useEffect } from 'react';

import '../styles/Slider.css';

const featuredProducts = [
  require('../assets/poster.png'),
  require('../assets/poster5.jpg'),
  require('../assets/poster6.jpg'),
  require('../assets/poster8.jpg'),
  require('../assets/poster9.jpg'),
];

let slideInterval;
export default function Slider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 8000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    setCurrentIndex((currentIndex + 1) % featuredProducts.length);
  };

  return (
    <div className='slider_container'>
      <div className='slider_img'>
        <img src={featuredProducts[currentIndex]} alt='' />
      </div>
      <div className='slider_content'>{props.children}</div>
    </div>
  );
}
