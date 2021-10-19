import React from 'react';
import './imagemain.scss'

const ImageMain = ({img})=> {

    return (
        <img src = {"https://image.tmdb.org/t/p/w500/" + img } className='img_container-1' alt='/' />
        );
    }
        
export default ImageMain ;