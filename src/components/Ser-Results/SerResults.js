/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback} from 'react'
import './SerResults.scss'
import ImageMain from '../ImageMain/imagemain'
import '../Accordion/accord.scss'
import {Link} from 'react-router-dom'
import Collapsible from 'react-collapsible';


const SerResults = () => {
    const [series, setSeries] = useState([])
    const [apifetch, setApiFetch] = useState('popular')
    const [loaded, setLoaded] = useState(false)
    
  const SeriesDetFetcher = useCallback(() => {
      
        fetch(`https://api.themoviedb.org/3/tv/${apifetch}?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1`)
            .then(response => response.json())
            .then(newresponse => {
                setLoaded(true)
                setSeries(newresponse.results)
            })
    }, [apifetch])
    useEffect(() => SeriesDetFetcher(), [SeriesDetFetcher])

    const ApiFetcher = (val) => {
        setApiFetch(val)
    }
    if (!loaded) {
        return (
            <div className="loading">
                <div className="arc"></div>
                <div className="arc"></div>
                <div className="arc"></div>
            </div>
        )
    } else {
        
        return (
          <div className='mainz__container'>
            <div className='ser__results'>
                <div className='show-sorters'>
                <Collapsible trigger="Sort Results By" triggerTagName='div' className = 'accordion'>
                  <li >
                      <Link to='/series' onClick={() => ApiFetcher('popular')} >Popularity</Link>
                  </li>
                  <li >
                      <Link to='/series' onClick={() => ApiFetcher('airing_today')} >Airing Today</Link>
                  </li>
                  <li >
                      <Link to='/series' onClick={() => ApiFetcher('on_the_air')}>On Tv</Link>
                  </li>
                  <li >
                      <Link to='/series' onClick={() => ApiFetcher('top_rated')} >Top Rated </Link>
                  </li>
                </Collapsible>
                </div>
                <div className = 'main-shows'>
                    <div className='sorted-shows'>
                        {
                            series.map(ser => <ImageMain key={ser.id.toString()} img={ser.poster_path} details={ser.overview} name={ser.name} date={ser.first_air_date.toString()} />)
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
export default SerResults