import React from 'react'
import DetailsCard from '../../components/DetailsCard/DetailsCard'
import StasContainer from '../../components/SearchStats/SearchStas'
import './searchresults.scss'

const SearchResults = () => {
    return (
        <>
            <main className = 'resultsContainer'>
                <div className='searchstats'>
                    <StasContainer/>
                </div> 
                <div className = 'search-results'>
                    <DetailsCard/>
                </div>
            </main>
        </>
    )
}

export default SearchResults
