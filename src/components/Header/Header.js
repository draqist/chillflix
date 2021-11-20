import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Brightness4Sharp from '@mui/icons-material/Brightness4Sharp'
import TranslateSharpIcon from '@mui/icons-material/TranslateSharp';

const Header = () => {
    return (
        <main className = 'header shadow-4dp'> 
                <Link to = '/'><span> Chillfli<span className = 'fiery'>X</span> </span> </Link>
            <nav className='nav-1'>
                    <ul className = 'header-ul'>
                        <li>
                            <Link to = '/movies'> Movies</Link>
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
            <div style = {{display: 'flex'}}>
                <span> <TranslateSharpIcon/>  </span>
                <span> <Brightness4Sharp/> </span>
            </div>
        </main>
    )
}

export default Header
