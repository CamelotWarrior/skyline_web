import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import CharPage from './pages/CharPage';
import CreditsPage from './pages/CreditsPage';
import ApplyPage from './pages/ApplyPage';
import Layout from './pages/Layout';
import ScrollToTop from './components/services/ScrollToTop';
// import Nub from './components/nub';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import {useState, useEffect} from 'react';

function App() {


//Code to set loading screen
/*const [loadingScreen, setLoadingScreen] = useState(false);
useEffect(() => {
  setLoadingScreen(true);
  setTimeout(() => setLoadingScreen(false), 3000);
}, []);
*/
  return (
    <div>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/characters' element={<CharPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/credits' element={<CreditsPage />} />
        <Route path='/apply' element={<ApplyPage />}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

