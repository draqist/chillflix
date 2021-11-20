import React from 'react';
import './imageslider.scss'

const ImageSlider = ({ img }) => {
    
    return (
            <div >
                <img src = {"https://image.tmdb.org/t/p/original/" + img} className = 'img_container' alt = ''/>
            </div>
    );
}

export default ImageSlider ;