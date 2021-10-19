import React from 'react';
import { Link } from 'react-router-dom';
import './seriescard.scss'

const SeriesCard = ({ name, imageUrl }) => {
    return (
        <div className = 'shadow-3dp ser__container'>
            <div className = 'seriescard'>
                <img src  = {"https://image.tmdb.org/t/p/w500/" + imageUrl} alt = ''/>
            </div>
                <Link to = '/'> <h4> { name }</h4> </Link>
        </div>
     );
}
 
export default SeriesCard;