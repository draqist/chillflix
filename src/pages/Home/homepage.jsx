import React, {useEffect, useState, useCallback} from 'react';
import './homepage.scss'
import SeriesCard from '../../components/Series/seriescard';
import MovieRec from '../../components/MovieRec/movierec';
import { Movierectext, Movietext } from '../../constants/constants'
import SearchBox from '../../components/SearchBox/SearchBox';
import Axios from 'axios'




function Homepage() {
  
    const [genre, setGenre] = useState([])
    const [shows, setShows] = useState([])
    // const [mainshows, setMainShows] = useState([])
    const [movieloaded, setMovieLoaded] = useState(false)
    const [seriesloaded, setSeriesLoaded] = useState(false)
    let [currentpage, setCurrentPage] = useState(1)
    
    const movieGenreFetcher = async () => {
      try {
        const result = await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=${currentpage}`).then(res => {
          return res.data.results
        })
        setGenre([...genre, ...result])
      } catch(error) {
        console.log(error.message)
      }
    }
    const seriesGenreFetcher = async () => {
      try {
        const result = await Axios.get('https://api.themoviedb.org/3/tv/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1&language=en-US').then(res => {
          return res.data.results
        })
        setSeriesLoaded(true);
        setShows(result)
      } catch(error) {
        console.log(error.message)
      }
    }

    useEffect(() => seriesGenreFetcher(), [])
    useEffect(() => movieGenreFetcher(), [currentpage])

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
                    <button href='' onClick={() => {
                      setCurrentPage(currentpage++)
                    }
                    }> Load More </button>
                        </div>
                    </div>
                </div>
            );
        }   
    }


export default Homepage ;