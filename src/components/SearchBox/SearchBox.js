import React from 'react'
import { useState } from 'react/cjs/react.development'
import './SearchBox.scss'

const SearchBox = () => {
    const [value, setValue] = useState('')
    // const SearchFilter = () => {

    // }
    return (
        <div className = 'search-field'>
            <form>
                <input type='search' placeholder='Search for any movie,popular tv show,actor....' className='search' value ={value} onChange={(e) => setValue(e.target.value) }/>
            </form>
            {console.log(value)}
        </div>
    )
}

export default SearchBox
