import React, {useState} from 'react'
import './SearchBox.scss'

const SearchBox = () => {
    const [value, setValue] = useState('')
    const SearchChangeHandler = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className = 'search-field'>
            <form>
                <input type='search' placeholder='Search for any movie,popular tv show,actor....' className='search' value = {value} onChange={SearchChangeHandler} />
            </form>
        </div>
    )
}

export default SearchBox
