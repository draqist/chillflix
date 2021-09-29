import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <main>
            <header className = 'nav-container'>
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
                    </ul>
                </nav>
                <nav className = 'nav-2'>
                    <ul>
                        <li>
                            <Link to='/'>Login</Link >
                        </li>
                        <li>
                            <Link to='/'>Join Us!</Link >
                        </li>
                        <li>
                            <Link to='/'></Link >
                        </li>
                    </ul>
                </nav>
            </header>
        </main>
    )
}

export default Header
