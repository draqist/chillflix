import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Brightness4Sharp from '@mui/icons-material/Brightness4Sharp'
import TranslateSharpIcon from '@mui/icons-material/TranslateSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { motion } from 'framer-motion';


const Header = () => {
  const [nav, setNav] = useState(false)
    return (
        <main className = 'header shadow-4dp'> 
                <Link to = '/'><span> Flee<span className = 'fiery'>X</span> </span> </Link>
            <nav className='nav-1'>
                    <ul className = 'header-ul'>
                        <li>
                            <Link to = '/movies'> Movies</Link>
                        </li>
                        <li>
                            <Link to = '/series'> TV Shows</Link>
                        </li>
                        <li>
                            <Link to = '/people'> People </Link>
                        </li>
                        <li>
                            <Link to = '/signup'> Login </Link>
                        </li>
                    </ul>
            </nav>
            <div className = 'header-btn-desk'>
          <div className='lights'>
            <TranslateSharpIcon className='btn-s' />
            <Brightness4Sharp className='btn-s' />
          </div>
          <div className = 'btn-small1'>
            <button className="toggle-button" onClick = {()=> setNav(!nav)}>
                <div className="toggle-button_line"></div>
                <div className="toggle-button_line"></div>
                <div className="toggle-button_line"></div>
            </button>
          </div>
        </div>
        {nav &&
          <motion.div className='drp_menu'
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          initial={{ y: -400, x: 400, opacity: 0 }}
        >
          <div>
            <CloseSharpIcon onClick={() => setNav(!nav)} />
            <motion.h1 whileHover = {{scale: 2, color: '#000'}} onClick={() => setNav(!nav)}>
              <Link to='/'>Home</Link>
            </motion.h1>
            <motion.h1 whileHover = {{scale: 2, color: '#000'}} onClick={() => setNav(!nav)}>
              <Link to='/movies'>Movies</Link>
            </motion.h1>
            <motion.h1 whileHover = {{scale: 2, color: '#000'}} onClick={() => setNav(!nav)}>
              <Link to='/series'>Shows</Link>
            </motion.h1>
            <motion.h1 whileHover = {{scale: 2, color: '#000'}} onClick={() => setNav(!nav)}>
              <Link to='/signup'>Sign Up</Link>
            </motion.h1>
          </div>
        </motion.div>
        }
        </main>
    )
}

export default Header
