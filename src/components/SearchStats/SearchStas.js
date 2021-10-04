import React from 'react'
import  './searchstats.scss'

const StasContainer = () => {
    return (
            <div className='statscontainer'>
                <div className = 'res-head'>
                    <h3 className = 'search-title'> Search Results </h3>
                </div>
                <ul className = 'stats-ul'>
                    <div className = 'res_cat'>
                        <li>
                            <a href='/'> Movies</a>
                            <span>  a </span>
                        </li>
                    </div>
                    <div className = 'res_cat'>
                        <li>
                            <a href='/'>TV Shows</a>
                            <span> a </span>
                        </li>
                    </div>
                    <div className = 'res_cat'>
                        <li>
                            <a href='/'>People</a>
                            <span> a </span>
                            
                        </li>
                    </div>
                    <div className = 'res_cat'>
                        <li>
                            <a href='/'>Companies</a>
                            <span> a </span>
                        </li>
                    </div>
                    <div className = 'res_cat'>
                        <li>
                            <a href='/'>Keywords</a>
                            <span> a </span>
                        </li>
                    </div>
                    <div className = 'res_cat'>
                        <li>
                            <a href='/'>Collections</a>
                            <span> a </span>
                        </li>
                    </div>
                    <div className = 'res_cat'>
                        <li>
                            <a href='/'>Networks</a>
                            <span> a </span>
                        </li>
                    </div>
                </ul>
            </div>
    )
}

export default StasContainer
