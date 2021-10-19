import React from 'react';
import './movierec.scss'
const MovieRec = ({name, imageUrl}) => {
    return (
        <div className = 'shadow-3dp movie-card'>
            <div className = 'm-img'>
                <img src={"https://image.tmdb.org/t/p/w500/" + imageUrl} className='moviereccard' alt= ''/>
            </div>
            <div className = 'dom'>
                <h4> { name }</h4>
            </div>
        </div>
     );
}
 
export default MovieRec;