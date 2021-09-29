import React from 'react'
import './SearchBox.scss'

const SearchBox = () => {
    return (
        <div className = 'search-field'>
            <form>
                <input type = 'search'  placeholder = 'Search for any movie,popular tv show,actor....' className = 'search' />
            </form>
        </div>
    )
}

export default SearchBox
