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
import moment from 'moment'

const SerResults = () => {
    const [series, setSeries] = useState([])
    const SeriesDetFetcher = () => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1')
            .then(response => response.json())
            .then(newresponse => setSeries(newresponse.results))
    }
    useEffect(() => SeriesDetFetcher(), [])
    const theme = createTheme({
        typography: {
            fontFamily: 'Montserrat'
        },
});
    return (
        <div className='ser__results'>
            <GlobalStyles styles={{ fontFamily: 'Montserrat' }} />
            <div className='show-sorters'>
                <ThemeProvider theme = {theme}>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Sort Results By</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <li> Popularity Descending </li>
                            <li>Popularity Ascending </li>
                            <li>Rating Descending </li>
                            <li>Rating Ascending </li>
                            <li>Title (A-Z) </li>
                            <li>Title (Z-1) </li>
                            <li>Release Date </li>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </ThemeProvider>
            </div>
            <div className = 'sorted-shows'>
                    {
                        series.map(ser => <ImageMain key={ser.id.toString()} img={ser.poster_path} details={ser.overview} name={ser.name} date={ser.first_air_date.toString()} />)
                }
                <span> Lucifer </span>
            </div>
        </div>
    )
}
export default SerResults