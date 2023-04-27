import './styles/App.css';
import Layout from './pages/Layout';
import ScrollToTop from './components/services/ScrollToTop';
import LoadingBar from 'react-top-loading-bar';
// import Nub from './components/nub';
import React, {Suspense, lazy} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const CharPage = lazy(() => import('./pages/CharPage'));
const CreditsPage = lazy(() => import('./pages/CreditsPage'));
const ApplyPage = lazy(() => import('./pages/ApplyPage'));


function App() {


//Code to set loading screen
/*const [loadingScreen, setLoadingScreen] = useState(false);
useEffect(() => {
  setLoadingScreen(true);
  setTimeout(() => setLoadingScreen(false), 3000);
}, []);
*/
const location=useLocation();
const [progress, setProgress] = useState(0);
const [prevLoc, setPrevLoc] = useState("");

useEffect(() => {
  setPrevLoc(location.pathname);
  setProgress(100);
  if(location.pathname===prevLoc){
    setPrevLoc('')
  }
}, [location]);

useEffect(() => {
  setProgress(0);
}, [prevLoc]);



  return (
    <div>
      <ScrollToTop />
      <LoadingBar
        color='#918CD8'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        />
      <Suspense fallback={prevLoc.element}>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage setProgress={30}/>} />
        <Route path='/about' element={<AboutPage setProgress={30}/>} />
        <Route path='/characters' element={<CharPage setProgress={30}/>} />
        <Route path='/news' element={<NewsPage setProgress={30}/>} />
        <Route path='/credits' element={<CreditsPage setProgress={30}/>} />
        <Route path='/apply' element={<ApplyPage setProgress={30}/>}/>
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;

