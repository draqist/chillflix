/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react'
import './MovResult.scss'
import ImageMain from '../ImageMain/imagemain'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import {Link} from 'react-router-dom'


const MovResults = () => {
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [movies, setMovies] = useState([])
    const [apifetch, setApiFetch] = useState('popular')
    const [expanded, setExpanded] = useState(false);
    const [loaded, setLoaded] = useState(false)
    const MoviesDetFetcher = useCallback(
        () => {
            fetch(`https://api.themoviedb.org/3/movie/${apifetch}?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1`)
            .then(response => response.json())
            .then(newresponse => {
                setLoaded(true)
                setMovies(newresponse.results)
            })
        },
        [apifetch,],
    )
    useEffect(() => MoviesDetFetcher(), [MoviesDetFetcher])
    const theme = createTheme({
        typography: {
            fontFamily: 'Montserrat',
        },
    });
    


    const ApiFetcher = (val) => {
        setApiFetch(val)
    }
    if (!loaded) {
        return (
            <div className="loading">
                <div className="arc"></div>
                <div className="arc"></div>
                <div className="arc"></div>
            </div>
        )
    } else {
        
        return (
          <div className = 'moviepage'>
            <div className='mov__results'>
                <GlobalStyles styles={{ fontFamily: 'Montserrat' }} />
                <div className='movie-sorters'>
                    <ThemeProvider theme={theme}>
                        <Accordion className='mov-accd' expanded={expanded === 'panel'} onChange={handleChange('panel')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Sort Results By</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <li >
                                        <Link to='/movies' onClick={() => ApiFetcher('popular')} >Popularity</Link>
                                    </li>
                                    <li >
                                        <Link to='/movies' onClick={() => ApiFetcher('now_playing')} >Now Playing</Link>
                                    </li>
                                    <li >
                                        <Link to='/movies' onClick={() => ApiFetcher('upcoming')}>Upcoming</Link>
                                    </li>
                                    <li >
                                        <Link to='/movies' onClick={() => ApiFetcher('top_rated')} >Top Rated </Link>
                                    </li>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </ThemeProvider>
                </div>
              <div className = 'main-movies'>
                    <div className='sorted-movies'>
                    {
                        movies.map(mov => <ImageMain key = {mov.id.toString()} name = {mov.title} details = {mov.overview} date = {mov.release_date.toString()} img = {mov.poster_path} />)
                    }
                    </div>
                    <div className='load_more1'>
                        <a href='#series'> Load More </a>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}
export default MovResults