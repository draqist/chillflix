import React from 'react'
import '../../pages/Shows/tvshows.scss'
import './SerResults.scss'
import ImageMain from '../ImageMain/imagemain'
import SeriesDetails from '../MovieRec1/movierec1'

const SerResults = ({img, details, name }) => {
    return (
        <div className = 'ser__results'>
            <div className='container-2'>
                <ImageMain image={img}/>
            </div>
            <div className='categories'>
                <div className="series__no">
                    <h3> No of Seasons </h3>
                    <ul>
                        <li>cd</li>
                        <li>ab</li>
                    </ul>
                </div>
                <div className="series__info">
                    <h2> Useful  Information</h2>
                    <h5> { details }</h5>
                    <div className='card-container'>
                        <SeriesDetails/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SerResults
