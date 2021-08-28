import React from 'react';
import './movierec.scss'
const MovieRec = ({name}) => {
    return (
        <div>
            <h4> { name }</h4>
            <div className='moviereccard'/>
        </div>
     );
}
 
export default MovieRec;