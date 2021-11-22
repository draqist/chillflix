import Homepage from './pages/Home/homepage';
import './App.scss';
import Header from './components/Header/Header';
import { Switch, Route} from 'react-router';
import SearchResults from './pages/SearchResults/searchresults';
import SignUp from './pages/AuthPages/SignUp/SignUp';
import Onboard from './pages/Onboard/Onboard';
import PeopleRes from './components/PeopleRes/PeopleRes';
import MovResults from './components/MovieResult/MovResult';
import SerResults from './components/Ser-Results/SerResults';


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
                <Route path = '/series' component = {SerResults} />
                <Route path = '/movies' component = {MovResults} />
                <Route path = '/signup' component = {SignUp} />
                <Route path = '/auth2' component = {Onboard} />
                <Route path = '/auth3' component = {PeopleRes} />
            </Switch>
          </main>
        </div>
    </>
  );
}

export default App;
