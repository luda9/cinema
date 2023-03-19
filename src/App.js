import './App.css';
import MovieDetails from './pages/MovieDetails';
import { Link, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
        <Link to="/cinema"><h1>Cinema</h1></Link>
      <Routes>
        <Route path="/cinema" element={ < LandingPage /> }/>
        <Route path="/cinema/movie/:movieId" element={ < MovieDetails /> }/>
      </Routes>

    </div>
  );
}

export default App;
