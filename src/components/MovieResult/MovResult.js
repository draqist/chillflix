/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react'
import './MovResult.scss'
import ImageMain from '../ImageMain/imagemain'
import '../Accordion/accord.scss'
import {Link} from 'react-router-dom'
import Collapsible from 'react-collapsible';


const MovResults = () => {

    const [movies, setMovies] = useState([])
    const [apifetch, setApiFetch] = useState('popular')
    const [loaded, setLoaded] = useState(false)
    
  
    const MoviesDetFetcher = useCallback(
        () => {
            fetch(`https://api.themoviedb.org/3/movie/${apifetch}?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1`)
            .then(response => response.json())
            .then(newresponse => {
                setLoaded(true)
                setMovies(newresponse.results)
            })
        },
        [apifetch,],
    )
    useEffect(() => MoviesDetFetcher(), [MoviesDetFetcher])
    
    const ApiFetcher = (val) => {
        setApiFetch(val)
    }
    if (!loaded) {
        return (
          <div className='loader-container'>
            <div className="loading">
                <div className="arc"></div>
                <div className="arc"></div>
                <div className="arc"></div>
            </div>
        </div>
        )
    } else {
        
        return (
          <div className = 'moviepage'>
            <div className='mov_results'>
              <div className='movie-sorters'>
                <Collapsible trigger="Sort Results By" triggerTagName='div' className = 'accordion'>
                  <li >
                      <Link to='/movies' onClick={() => ApiFetcher('popular')} >Popularity</Link>
                  </li>
                  <li >
                      <Link to='/movies' onClick={() => ApiFetcher('now_playing')} >Now Playing</Link>
                  </li>
                  <li >
                      <Link to='/movies' onClick={() => ApiFetcher('upcoming')}>Upcoming</Link>
                  </li>
                  <li >
                      <Link to='/movies' onClick={() => ApiFetcher('top_rated')} >Top Rated </Link>
                  </li>
                </Collapsible>
              </div>
              <div className = 'main-movies'>
                    <div className='sorted-movies'>
                    {
                        movies.map(mov => <ImageMain key = {mov.id.toString()} name = {mov.title} details = {mov.overview} date = {mov.release_date.toString()} img = {mov.poster_path} />)
                    }
                    </div>
                    <div className='load_more1'>
                        <a href='#series'> Load More </a>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}
export default MovResults