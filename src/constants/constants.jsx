import React from 'react'
import './constants.scss'


export const Playlisttext = () => {
    return(
    <div className="movietext">
        <h3> Continue Watching</h3>
    </div>
    )
}

export const Movietext = () => {
    return(
    <div className = 'movietext'>
        <h3> Popular TV Shows </h3>   
    </div>
    )
}
export const Movierectext = () => {
    return(
    <div className="movietext">
        <h3> Popular Movies</h3>
    </div>
    )
}
export const AllText = {Movierectext, Movietext, Playlisttext}