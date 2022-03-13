import React, { useState, useEffect, useCallback}from 'react'
import Collapsible from 'react-collapsible'
import './accord.scss'
import {Link} from 'react-router-dom'

const Accordion = () => {

  const [loaded, setLoaded] = useState(false)
  const [movies, setMovies] = useState([])
  const [apifetch, setApiFetch] = useState('popular')
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

  return (
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
  )
}

export default Accordion
