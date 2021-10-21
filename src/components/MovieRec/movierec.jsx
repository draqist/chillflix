import React from 'react';
import './movierec.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MovieRec = ({ name, imageUrl }) => {
    AOS.init()
    return (
        <div className = 'shadow-3dp movie-card' data-aos = "zoom-in-up" data-aos-duration = '1200' data-aos-distance = '25px'>
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