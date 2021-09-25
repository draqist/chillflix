import React from 'react';
import ImageMain from '../../components/ImageMain/imagemain'
import './tvshows.scss'
import {  } from '../../constants/constants'
import MovieRec1 from '../../components/MovieRec1/movierec1';

function TvShows () {
    return (
        <div className= 'main__container'>
            <div className='container'>
                <ImageMain />
            </div>

            <div className='categories'>
                <div className="series__no">
                    <h2> No of Seasons </h2>
                </div>
                <div className="series__info">
                    <h2> Useful  Information</h2>
                    <h5> Useful  Information is an information determined to be useful by the user or the manufacturer. They are the guidlines containing the do and dont's constituting an establishment.
                    </h5>
                    <div className='card-container'>
                        <MovieRec1/>
                        <MovieRec1/>
                        <MovieRec1/>
                        <MovieRec1/>
                        <MovieRec1/>
                        <MovieRec1/>
                        <MovieRec1/>
                        <MovieRec1/>
                        <MovieRec1/>
                        <MovieRec1/>
                        <MovieRec1/>
                        <MovieRec1/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TvShows ;