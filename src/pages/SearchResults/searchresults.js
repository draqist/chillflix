import React from 'react'
import DetailsCard from '../../components/DetailsCard/DetailsCard'
import './searchresults.scss'

const SearchResults = () => {
    return (
        <div>
            <main className = 'resultsContainer'>
                <div className = 'searchstats'>
                </div> 
                <div className = 'search-results'>
                    <DetailsCard/>

                </div>
            </main>
        </div>
    )
}

export default SearchResults
