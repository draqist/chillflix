import React, {useEffect, useState} from 'react';
import MovieCard from '../../components/MovieCard/moviecard';
import ImageSlider from '../../components/ImageSlider/imageslider'
import PlaylistCard from '../../components/Playlist/playlistcard';
import './homepage.scss'
import SeriesCard from '../../components/Series/seriescard';
import MovieRec from '../../components/MovieRec/movierec';
import { Movierectext, Movietext, Playlisttext } from '../../constants/constants'
import SearchBox from '../../components/SearchBox/SearchBox';
import Slider from "react-slick";
import AOS from 'aos'
import 'aos/dist/aos.css'



function Homepage() {
    AOS.init()
    const [genre, setGenre] = useState([])
    const [shows, setShows] = useState([])
    const [movieloaded, setMovieLoaded] = useState(false)
    const [seriesloaded, setSeriesLoaded] = useState(false)
    const [currentpage, setCurrentPage] = useState(1)
    const [carousel, setCarousel] =  useState([])

    const movieGenreFetcher = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=${currentpage}`)
            .then(res => res.json())
            .then(json => {  
                setMovieLoaded(true)
                setGenre(json.results)
            })
    }
    const seriesGenreFetcher = () => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1&language=en-US')
            .then(resp => resp.json())
            .then((newjson) => {
                setSeriesLoaded(true);
                setShows(newjson.results)
            })
    }
    const CarouselData = () => {
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=98750334fac1aaa94aca2b7a98d59728')
            .then(r => r.json())
            .then((newr) => {
                setSeriesLoaded(true);
                setCarousel(newr.results)
            })
    }
    useEffect(() => movieGenreFetcher(), [currentpage])
    useEffect(() => seriesGenreFetcher(), [])
    useEffect(() => CarouselData(), [])
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    if (!movieloaded && !seriesloaded) {
        return (
            <div className = 'loader-container'>
                {/* <div className="loader">Loading...</div> */}
                {/* <div className="center">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div> */}
                <div className="loading">
                    <div className="arc"></div>
                    <div className="arc"></div>
                    <div className="arc"></div>
                </div>
            </div>
        )
    } else {
            return (
                
                <div className='main__container' >
                        <SearchBox/>
                    <div className='container' data-aos='fade' data-aos-duration='2000'>
                        {/* <Slider {...settings}> */}
                            {
                                carousel.map((e) => (<ImageSlider key={e.id.toString()} img = {e.poster_path} />))
                            }
                        {/* </Slider> */}
                        <div className = 'movie__container'>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard />
                        </div>
                    </div>
                    <Playlisttext />
                    <div className= 'playlistcontainer'>
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                    </div>
                    <div className = 'moviecard'>
                        <Movietext />
                        <div id = 'series'className = 'tvshows'>
                            {
                                shows.filter((s, idx) => idx < 18).map((s) => (<SeriesCard  key = {s.id.toString()} name = {s.name} imageUrl = {s.poster_path} />) )
                            }
                        </div>
                    </div>
                    <div className = 'moviecard-1'>
                        <Movierectext />
                        <div id = 'movie'className='series'  >
                            {
                                genre.map((e) => <MovieRec key = {e.id.toString()} name = {e.title} imageUrl = {e.poster_path} /> )
                            }
                            
                        </div>
                        <div className = 'load_more'>
                            <a href='#series' onClick={() => setCurrentPage(cp => cp + 1)}> Load More </a>
                            {console.log(currentpage)}
                        </div>
                    </div>
                </div>
            );
        }   
    }


export default Homepage ;