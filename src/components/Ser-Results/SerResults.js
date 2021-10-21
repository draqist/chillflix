import React, {useState, useEffect} from 'react'
import '../../pages/Shows/tvshows.scss'
import './SerResults.scss'
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


const SerResults = () => {
    const [series, setSeries] = useState([])
    const [apifetch, setApiFetch] = useState('popular')
    const [expanded, setExpanded] = useState(false);
    const [loaded, setLoaded] = useState(false)
    const SeriesDetFetcher = () => {
        fetch(`https://api.themoviedb.org/3/tv/${apifetch}?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1`)
            .then(response => response.json())
            .then(newresponse => {
                setLoaded(true)
                setSeries(newresponse.results)
            })
    }
    useEffect(() => SeriesDetFetcher())
    const theme = createTheme({
        typography: {
            fontFamily: 'Montserrat',
        },
    });
    

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
            <div className='ser__results'>
                <GlobalStyles styles={{ fontFamily: 'Montserrat' }} />
                <div className='show-sorters'>
                    <ThemeProvider theme={theme}>
                        <Accordion className='accd' expanded={expanded === 'panel'} onChange={handleChange('panel')}>
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
                                        <Link to='/shows' onClick={() => ApiFetcher('popular')} >Popularity</Link>
                                    </li>
                                    <li >
                                        <Link to='/shows' onClick={() => ApiFetcher('airing_today')} >Airing Today </Link>
                                    </li>
                                    <li >
                                        <Link to='/shows' onClick={() => ApiFetcher('on_the_air')}>On TV</Link>
                                    </li>
                                    <li >
                                        <Link to='/shows' onClick={() => ApiFetcher('top_rated')} >Top Rated </Link>
                                    </li>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </ThemeProvider>
                </div>
                <div className='sorted-shows'>
                    {
                        series.map(ser => <ImageMain key={ser.id.toString()} img={ser.poster_path} details={ser.overview} name={ser.name} date={ser.first_air_date.toString()} />)
                    }
                </div>
            </div>
        )
    }
}
export default SerResults