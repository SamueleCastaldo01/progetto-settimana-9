import './App.css';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Search from './pages/Search';
import DetailsFilm from './pages/DetailsFilm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//extra extra ho creato la pagina search dei film
//extra extra hover riproduci con i dettagli del film

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/search" element={<Search />} />
                <Route path="/detailsFilm" element={<DetailsFilm />} /> {/**Questa non è completata */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
