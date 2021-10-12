import React, { useEffect, useState } from 'react';
import './tvshows.scss'
// import {  } from '../../constants/constants'
import SerResults from '../../components/Ser-Results/SerResults';

function TvShows() {
    const [series, setSeries] = useState([])
    const SeriesDetFetcher = () => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1')
            .then(response => response.json())
            .then(newresponse => setSeries(newresponse.results))
        }
    useEffect(() => SeriesDetFetcher(), [])
    return (
        <div className='mainz__container'>
            {
                series.map(ser => <SerResults key = {ser.id.toString()} img = {ser.poster_path} details = {ser.overview} bckdrop = {ser.backdrop_path} name = {ser.name} date = {ser.first_air_date} />)
            }
        </div>
    );
}

export default TvShows ;