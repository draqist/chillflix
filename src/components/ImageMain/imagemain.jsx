import React from 'react';
import './imagemain.scss'

const ImageMain = ({image})=> {

    return (
        <img src = {"https://image.tmdb.org/t/p/w500/" + image} className='img_container-1' alt='/' />
        );
    }
        
export default ImageMain ;