import './constants.scss'
const number = 10

export const Playlisttext = () => {
    return(
    <div className="movietext">
        <h3> Continue Watching</h3>
        <h3 style ={{ marginRight: '2rem', textAlign: 'right'}}>See all { number} </h3>
    </div>
    )
}

export const Movietext = () => {
    return(
    <div className = 'movietext'>
        <h3> TV Shows </h3>   
            <h3 style={{ marginRight: '2rem', textAlign: 'right' }}> See all { number}</h3>
    </div>
    )
}
export const Movierectext = () => {
    return(
    <div className="container">
        <h3> Movies</h3>
        <h3 style ={{ marginRight: '2rem', textAlign: 'right'}} >See all { number} </h3>
    </div>
    )
}
export const AllText = {Movierectext, Movietext, Playlisttext}