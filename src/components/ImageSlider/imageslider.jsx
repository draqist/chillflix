import React from 'react';
import './imageslider.scss'
import Slider from "react-slick";

function ImageSlider({ img }) {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        // <Slider {...settings}>
            <div className='imgcontainer' >
                <img src = {"https://image.tmdb.org/t/p/w500/" + img} className = 'img_container'/>
            </div>
        // </Slider>
    );
}

export default ImageSlider ;