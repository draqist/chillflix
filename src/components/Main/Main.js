import React from 'react';
import '../ImageMain/imagemain.scss'

const Main = ({ img, name,}) => {
    return (
        <div className = 'img-shows-desk'>
            <div className = 'new-img_desk'>
                <img src={"https://image.tmdb.org/t/p/w500/" + img} className='img_container-1' alt='PosterImage' />
                <h5> <a href = '/shows' > {name} </a></h5>
            </div>
        </div>
        );
    }
        
export default Main ;