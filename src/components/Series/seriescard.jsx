import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './seriescard.scss'

const SeriesCard = ({ name, imageUrl }) => {
    const [pages, setPages] = useState('')
    const mpagelink = () => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1&language=en-US')
            .then(e => e.json)
            .then(s => setPages(s.results))

    }
    useEffect(() => mpagelink(), [])
    return (
        <div className = 'shadow-3dp ser__container'>
            <div className = 'seriescard'>
                <img src  = {"https://image.tmdb.org/t/p/w500/" + imageUrl} alt = ''/>
            </div>
                <Link to = '/'> <h4> { name }</h4> </Link>
        </div>
     );
}
 
export default SeriesCard;