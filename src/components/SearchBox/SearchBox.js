import React, {useState} from 'react'
import './SearchBox.scss'

const SearchBox = () => {
    const [value, setValue] = useState('')
  // const [searchresults, setSearchResults] = useState([])
  // console.log(searchresults)
    const SearchChangeHandler = (e) => {
        setValue(e.target.value)
    }
    // const SearchFetch = useCallback(
    //     () => {
    //         fetch(`https://api.themoviedb.org/3/search/multi?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&query=${value}&page=1&include_adult=false`)
    //         .then(res => res.json())
    //         .then(searchres => {
    //             if (searchres){
    //                 // setSearchResults(searchres.results)
    //             } 
    //     })
    //     },
    //     [value],
    // )
    // useEffect(() => SearchFetch(), [SearchFetch])
    return (
        <div className = 'search-field'>
            <form>
                <input type='search' placeholder='Search for any movie,popular tv show,actor....' className='search' value = {value} onChange={SearchChangeHandler} />
            </form>
        </div>
    )
}

export default SearchBox
