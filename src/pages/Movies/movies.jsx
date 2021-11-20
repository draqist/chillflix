import React from 'react'
import './movies.scss'
import '../../components/MovieResult/MovResult'
import MovResults from '../../components/MovieResult/MovResult'

const MoviesPage = () => {
    return (
        <div className='moviepage'>
            <MovResults/>
        </div>
    )
}

export default MoviesPage

