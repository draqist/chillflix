import React, {useState, useEffect} from 'react'
import './SearchBox.scss'

const SearchBox = () => {
    const [value, setValue] = useState('')
    const SearchFetch = () => {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&query=$"aquaman"&page=1&include_adult=false`)
            .then(searchres => searchres.json())
            .then(read => setValue(read.results))
    }
    useEffect(() => SearchFetch(), [])
    const SearchChangeHandler = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className = 'search-field'>
            <form>
                <input type='search' placeholder='Search for any movie,popular tv show,actor....' className='search' value ={value} onChange={SearchChangeHandler} />
            </form>
            {console.log(value)}
        </div>
    )
}

export default SearchBox
