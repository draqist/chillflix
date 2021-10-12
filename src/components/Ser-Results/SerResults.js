import React from 'react'
import '../../pages/Shows/tvshows.scss'
import './SerResults.scss'
import ImageMain from '../ImageMain/imagemain'
import SeriesDetails from '../MovieRec1/movierec1'

const SerResults = ({img, bckdrop, details, name, date }) => {
    return (
        <div className='ser__results'>
            <img src = {"https://image.tmdb.org/t/p/w500/" + bckdrop } className = 'bg-im' alt='/' />
            <div className='container-2'>
                <ImageMain image={img}/>
            </div>
            <div className='categories'>
                <div className="series__info">
                    <h2> {name} </h2>
                    <h5 className = 'h5'> <a href = '/'> { date } </a></h5>
                    <h5 className = 'details'> { details }</h5>
                    <div className='card-container'>
                        <SeriesDetails/>
                    </div>
                </div>
                <div className="series__no">
                    <h3> No of Seasons </h3>
                    <ul>
                        <li>cd</li>
                        <li>ab</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SerResults
