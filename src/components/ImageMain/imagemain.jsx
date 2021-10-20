import React from 'react';
import './imagemain.scss'
import moment from 'moment'

const ImageMain = ({ img, name, date }) => {
    // let air_date = moment({ date }).format('MMM DD, YYYY')
    let mate = moment({date}, ["YYYY-MM-DD", moment.ISO_8601]).format('MMM DD, YYYY')
    console.log(mate)
    return (
        <div className = 'img-shows-desk'>
            <img src={"https://image.tmdb.org/t/p/w500/" + img} className='img_container-1' alt='/' />
            <h5> {name}</h5>
            {/* <h6> {air_date}</h6> */}
            
        </div>
        );
    }
        
export default ImageMain ;