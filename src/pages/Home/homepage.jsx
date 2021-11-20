import React, {useEffect, useState, useCallback} from 'react';
import './homepage.scss'
import SeriesCard from '../../components/Series/seriescard';
import MovieRec from '../../components/MovieRec/movierec';
import { Movierectext, Movietext } from '../../constants/constants'
import SearchBox from '../../components/SearchBox/SearchBox';
import AOS from 'aos'
import 'aos/dist/aos.css'



function Homepage() {
    AOS.init()
    const [genre, setGenre] = useState([])
    const [shows, setShows] = useState([])
    const [movieloaded, setMovieLoaded] = useState(false)
    const [seriesloaded, setSeriesLoaded] = useState(false)
    const [currentpage, setCurrentPage] = useState(1)

    const movieGenreFetcher = useCallback(
        () => {
           fetch(`https://api.themoviedb.org/3/movie/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=${currentpage}`)
            .then(res => res.json())
            .then(json => {  
                setMovieLoaded(true)
                setGenre(json.results)
            })
        },
        [currentpage],
    )
    const seriesGenreFetcher = useCallback(
        () => {
             fetch('https://api.themoviedb.org/3/tv/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1&language=en-US')
            .then(resp => resp.json())
            .then((newjson) => {
                setSeriesLoaded(true);
                setShows(newjson.results)
            })
        },
        [],
    )
    const CarouselData = () => {
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=98750334fac1aaa94aca2b7a98d59728')
            .then(r => r.json())
            .then((newr) => {
                setSeriesLoaded(true);
            })
    }
    useEffect(() => movieGenreFetcher(), [movieGenreFetcher])
    useEffect(() => seriesGenreFetcher(), [seriesGenreFetcher])
    useEffect(() => CarouselData(), [])

    if (!movieloaded && !seriesloaded) {
        return (
            <div className = 'loader-container'>
                <div className="loading">
                    <div className="arc"></div>
                    <div className="arc"></div>
                    <div className="arc"></div>
                </div>
            </div>
        )
    } else {
            return (
                
                <div className='main__container' >
                        <SearchBox/>
                    <div className = 'moviecard'>
                        <Movietext />
                        <div id = 'series'className = 'tvshows'>
                            {
                                shows.filter((s, idx) => idx < 18).map((s) => (<SeriesCard  key = {s.id.toString()} name = {s.name} imageUrl = {s.poster_path} />) )
                            }
                        </div>
                    </div>
                    <div className = 'moviecard-1'>
                        <Movierectext />
                        <div id = 'movie'className='series'  >
                            {
                                genre.map((e) => <MovieRec key = {e.id.toString()} name = {e.title} imageUrl = {e.poster_path} /> )
                            }
                            
                        </div>
                        <div className = 'load_more'>
                            <a href='#series' onClick={() => setCurrentPage(cp => cp + 1)}> Load More </a>
                            {console.log(currentpage)}
                        </div>
                    </div>
                </div>
            );
        }   
    }


export default Homepage ;