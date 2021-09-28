import Homepage from './pages/Home/homepage';
import './App.scss';
// import TvShows from './pages/Shows/tvshows';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

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
// const analytics = getAnalytics(app);


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
