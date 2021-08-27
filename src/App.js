import Homepage from './pages/homepage';
import './App.scss';
// import TvShows from './pages/tvshows';


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
