import React, {useState, useEffect} from 'react'
import '../../pages/Shows/tvshows.scss'
import './SerResults.scss'
import ImageMain from '../ImageMain/imagemain'

const SerResults = () => {
    const [series, setSeries] = useState([])
    const SeriesDetFetcher = () => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1')
            .then(response => response.json())
            .then(newresponse => setSeries(newresponse.results))
    }
    useEffect(() => SeriesDetFetcher(), [])
    return (
        <div className='ser__results'>
            {
                series.map(ser => <ImageMain key={ser.id.toString()} img={ser.poster_path} details={ser.overview} name={ser.name} date={ser.first_air_date} />)
            }
            <div className='container-2'>
            </div>
        </div>
    )
}
export default SerResults