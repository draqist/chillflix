import Homepage from './pages/Home/homepage';
import './App.scss';
// import TvShows from './pages/Shows/tvshows';


function App() {
  return (
    <div className='main'>    
      <div className='main__body'>
        <Homepage />
        {/* <TvShows /> */}
      </div>
    </div>
  );
}

export default App;
