import React from 'react';
import './seriescard.scss'

const SeriesCard = ({name}) => {
    return (
        <div className = 'ser__container'>
            <h4> { name }</h4>
            <div className= 'seriescard'/>
        </div>
     );
}
 
export default SeriesCard;