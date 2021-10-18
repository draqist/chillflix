import Homepage from './pages/Home/homepage';
import './App.scss';
import { initializeApp } from "firebase/app";
import SearchBox from './components/SearchBox/SearchBox';
import Header from './components/Header/Header';
import { Switch, Route} from 'react-router';
import TvShows from './pages/Shows/tvshows';

import { getAnalytics } from "firebase/analytics";
import SearchResults from './pages/SearchResults/searchresults';
import SignUp from './pages/AuthPages/SignUp/SignUp';

const firebaseConfig = {
apiKey: "AIzaSyBwefyWmOefbTPFsK_v9C4x-9aJkwczdOo",
authDomain: "chillflicks-dev.firebaseapp.com",
projectId: "chillflicks-dev",
storageBucket: "chillflicks-dev.appspot.com",
messagingSenderId: "380434459533",
appId: "1:380434459533:web:11bc57771925793c0febc4",
measurementId: "G-S2YQ7ZJH6K"
};
const app = initializeApp(firebaseConfig);
//eslint-disable-next-line
const analytics = getAnalytics(app);



function App() {
  return (
    <>
        <div className='main'>    
          <main className='main__body'>
              <Header />
              <Switch>
                <Route exact path = '/'>
                  <SearchBox/>
                  <Homepage />
                </Route>
            <Route path = '/search'>
              <SearchResults/>
            </Route>
            <Route path = '/shows'>
              <TvShows />
            </Route>
            <Route path = '/auth1'>
              <SignUp />
            </Route>
            </Switch>
          </main>
        </div>
    </>
  );
}

export default App;
