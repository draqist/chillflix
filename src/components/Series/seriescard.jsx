import React from 'react';
import './seriescard.scss'

const SeriesCard = ({name, imageUrl}) => {
    return (
        <div className = 'ser__container'>
            <div className = 's-img'>
                <img src  = {"https://image.tmdb.org/t/p/w500/" + imageUrl} className= 'seriescard' alt = ''/>
            </div>
            <div className = 's-card' >
                 <h4> { name }</h4>
           </div>
        </div>
     );
}
 
export default SeriesCard;