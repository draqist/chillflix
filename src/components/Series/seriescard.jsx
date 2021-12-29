/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './seriescard.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const SeriesCard = ({ name, imageUrl }) => {
    AOS.init()
    return (
        <div className = 'shadow-3dp ser__container' data-aos = 'zoom-in' data-aos-duration = '1000'>
            <div className = 'seriescard'>
                <img src  = {"https://image.tmdb.org/t/p/w500/" + imageUrl} alt = ''/>
            </div>
                <Link to = '/'> <h4> { name }</h4> </Link>
        </div>
     );
}
 
export default SeriesCard;