import React, {useEffect, useState} from 'react';
import MovieCard from '../components/moviecard';
import ImageSlider from '../components/imageslider'
import PlaylistCard from '../components/playlistcard';
import './homepage.scss'
import SeriesCard from '../components/seriescard';
import MovieRec from '../components/movierec';
import { Movierectext, Movietext, Playlisttext } from '../constants/constants'



function Homepage () {
    const [genre, setGenre] = useState([])
    const [shows, setShows] = useState([])

    const movieGenreFetcher = () => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US')
            .then(res => res.json())
            .then(json => setGenre(json.genres))
    }
    const seriesGenreFetcher = () => {
        fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US')
            .then(resp => resp.json())
            .then(newjson => setShows(newjson.genres))
    }
    useEffect(() => movieGenreFetcher(), [])
    useEffect(() => seriesGenreFetcher(), [])

    return (
        
        <div className='main__container'>
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
                <div className = 'tvshows'>
                    {
                        shows.map((s) => (<SeriesCard  key = {s.id.toString()} name = {s.name} />) )
                    }
                </div>
            </div>
            <div className = 'moviecard'>
                <Movierectext />
                <div className='series'>
                    {
                        genre.map((e) => (<MovieRec key = {e.id.toString()} name = {e.name} />) )
                    }
                    {/* <MovieRec />
                    <MovieRec /> 
                    <MovieRec /> */}
                </div>
            </div>
        </div>
    );
}

export default Homepage ;