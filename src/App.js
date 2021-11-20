import Homepage from './pages/Home/homepage';
import './App.scss';
import Header from './components/Header/Header';
import { Switch, Route} from 'react-router';
import TvShows from './pages/Shows/tvshows';
import SearchResults from './pages/SearchResults/searchresults';
import SignUp from './pages/AuthPages/SignUp/SignUp';
import MoviesPage from './pages/Movies/movies';
import Onboard from './pages/Onboard/Onboard';
import PeopleRes from './components/PeopleRes/PeopleRes';


function App() {
  return (
    <>
        <div className='main'>    
          <main className='main__body'>
              <Header />
              <Switch>
                <Route exact path = '/' component = {Homepage} />
                  {/* <SearchBox/> */}
                <Route path = '/search' component = {SearchResults} />
                <Route path = '/shows' component = {TvShows} />
                <Route path = '/movies' component = {MoviesPage} />
                <Route path = '/auth1' component = {SignUp} />
                <Route path = '/auth2' component = {Onboard} />
                <Route path = '/auth3' component = {PeopleRes} />
            </Switch>
          </main>
        </div>
    </>
  );
}

export default App;
