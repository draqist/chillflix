import React, {useEffect, useState} from 'react';
import MovieCard from '../components/moviecard';
import ImageSlider from '../components/imageslider'
import PlaylistCard from '../components/playlistcard';
import './homepage.scss'
import SeriesCard from '../components/seriescard';
import MovieRec from '../components/movierec';
import { Movierectext, Movietext, Playlisttext } from '../constants/constants'


function Homepage () {
    return (
        <div className= 'main__container'>
            <div className='container'>
                <ImageSlider />
                <div className = 'movie__container'>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard />
                </div>
            </div>
            <Playlisttext />
            <div className= 'playlistcontainer'>
                <PlaylistCard/>
                <PlaylistCard/>
                <PlaylistCard/>
                <PlaylistCard/>
            </div>
            <div className = 'moviecard'>
                <Movietext />
                <div className = 'series'>
                    <SeriesCard />
                    <SeriesCard />
                    <SeriesCard />
                    <SeriesCard />
                    <SeriesCard />
                    <SeriesCard />
                    <SeriesCard />
                </div>
            </div>
            <div className = 'moviecard'>
                <Movierectext />
                <div className='series'>
                    <MovieRec/>
                    <MovieRec/>
                    <MovieRec/>
                    <MovieRec/>
                </div>
            </div>
        </div>
    );
}

export default Homepage ;