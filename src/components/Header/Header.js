import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <main className = 'header'> 
            <nav className='nav-1'>
                <span> ChillfliX </span>
                    <ul className = 'header-ul'>
                        <li>
                            <Link to = '/'>Home</Link>
                        </li>
                        <li>
                            <Link to = '/search'> Movies</Link>
                        </li>
                        <li>
                            <Link to = '/shows'> TV Shows</Link>
                        </li>
                        <li>
                            <Link to = '/'> People </Link>
                        </li>
                        <li>
                            <Link to = '/auth1'> Login </Link>
                        </li>
                    </ul>
                </nav>
        </main>
    )
}

export default Header
