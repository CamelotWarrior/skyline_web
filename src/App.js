import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import CharPage from './pages/CharPage';
import CreditsPage from './pages/CreditsPage';
import Layout from './pages/Layout';
// import Nub from './components/nub';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  /*

//Code to set loading screen
const [loading, setLoading] = useState(false);
useEffect(() => {
  setLoading(true);
  setTimeout(() => setLoading(false), 3000);
}, []);

*/
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/characters' element={<CharPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/credits' element={<CreditsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

