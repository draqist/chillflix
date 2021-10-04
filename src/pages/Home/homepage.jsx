import React, {useEffect, useState} from 'react';
import MovieCard from '../../components/MovieCard/moviecard';
import ImageSlider from '../../components/ImageSlider/imageslider'
import PlaylistCard from '../../components/Playlist/playlistcard';
import './homepage.scss'
import SeriesCard from '../../components/Series/seriescard';
import MovieRec from '../../components/MovieRec/movierec';
import { Movierectext, Movietext, Playlisttext } from '../../constants/constants'



function Homepage () {
    const [genre, setGenre] = useState([])
    const [shows, setShows] = useState([])
    const [loaded, setLoaded] = useState(false)

    const movieGenreFetcher = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1')
            .then(res => res.json())
            .then(json => setGenre(json.results))
    }
    const seriesGenreFetcher = () => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1&language=en-US')
            .then(resp => resp.json())
            .then((newjson) => {
                setLoaded(true);
                setShows(newjson.results)
            })
    }
    useEffect(() => movieGenreFetcher(), [])
    useEffect(() => seriesGenreFetcher(), [])

    if (!loaded) {
        return <> loading ...</>
    } else {
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
                                shows.filter((s, idx) => idx < 13).map((s) => (<SeriesCard  key = {s.id.toString()} name = {s.name} imageUrl = {s.poster_path} />) )
                            }
                        </div>
                    </div>
                    <div className = 'moviecard'>
                        <Movierectext />
                        <div className='series'>
                            {
                                genre.map((e) => (<MovieRec key = {e.id.toString()} name = {e.title} imageUrl = {e.poster_path} />) )
                            }
                        </div>
                    </div>
                </div>
            );
        }   
    }


export default Homepage ;