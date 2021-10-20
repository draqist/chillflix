import React from 'react';
import './imagemain.scss'
import moment from 'moment'
import dayjs from 'dayjs'

const ImageMain = ({ img, name, date }) => {
    let x = date
    let air_date = moment(x.toString()).format('MMM DD, YYYY')
    let mate = dayjs({date}.toString()).format()
    console.log(mate)
    console.log(air_date)
    return (
        <div className = 'img-shows-desk'>
            <div className = 'new-img_desk'>
                <img src={"https://image.tmdb.org/t/p/w500/" + img} className='img_container-1' alt='/' />
                <h5> <a href = '/shows' > {name} </a></h5>
                <span> {air_date}</span>
            </div>
        </div>
        );
    }
        
export default ImageMain ;