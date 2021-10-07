import React from 'react';
import ImageMain from '../../components/ImageMain/imagemain'
import './tvshows.scss'
import {  } from '../../constants/constants'
import SeriesDetails from '../../components/MovieRec1/movierec1';

function TvShows () {
    return (
        <div className= 'mainz__container'>
            <div className='container-2'>
                <ImageMain />
            </div>
            <div className='categories'>
                <div className="series__no">
                    <h2> No of Seasons </h2>
                    <ul>
                        <li>cd</li>
                        <li>ab</li>
                    </ul>
                </div>
                <div className="series__info">
                    <h2> Useful  Information</h2>
                    <h5> Useful  Information is an information determined to be useful by the user or the manufacturer. They are the guidlines containing the do and dont's constituting an establishment.
                    </h5>
                    <div className='card-container'>
                        <SeriesDetails/>
                        <SeriesDetails/>
                        <SeriesDetails/>
                        <SeriesDetails/>
                        <SeriesDetails/>
                        <SeriesDetails/>
                        <SeriesDetails/>
                        <SeriesDetails/>
                        <SeriesDetails/>
                        <SeriesDetails/>
                        <SeriesDetails/>
                        <SeriesDetails/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TvShows ;