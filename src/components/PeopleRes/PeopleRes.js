import React, {useState, useEffect, useCallback} from 'react'
import '../../pages/Shows/tvshows.scss'
import './PeopleRes.scss'
import ImageMain from '../ImageMain/imagemain'


const PeopleRes = () => {

    const [people, setPeople] = useState([])
    const [loaded, setLoaded] = useState(false)
    const PeopleDetFetcher = useCallback(
        () => {
            fetch(`https://api.themoviedb.org/3/person/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1`)
            .then(response => response.json())
            .then(newresponse => {
                setLoaded(true)
                setPeople(newresponse.results)
            })
        },
        [],
    )
    useEffect(() => PeopleDetFetcher(), [PeopleDetFetcher])

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
            <div className='mov__results'>
                {
                    people.map(mov => <ImageMain key = {mov.id.toString()} name = {mov.name} details = {mov.overview} date = {mov.release_date.toString()} img = {mov.profile_path} />)
                }
            </div>
        )
    }
}
export default PeopleRes
