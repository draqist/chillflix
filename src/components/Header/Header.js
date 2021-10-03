import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <main className = 'header'> 
            <div className = 'nav-container'>
                <nav className = 'nav-1'>
                    <ul>
                        <li>
                            <Link to = '/'>Home</Link>
                        </li>
                        <li>
                            <Link to = '/'> Movies</Link>
                        </li>
                        <li>
                            <Link to = '/'> TV Shows</Link>
                        </li>
                        <li>
                            <Link to = '/'> People </Link>
                        </li>
                        <li>
                            <Link to = '/'> Login </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    )
}

export default Header
