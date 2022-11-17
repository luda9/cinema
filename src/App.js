import './App.css';
import MovieDetails from './pages/MovieDetails';
import { Link, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
        <Link to="/"><h1>Cinema</h1></Link>
      <Routes>
        <Route path="/" element={ < LandingPage /> }/>
        <Route path="/movie/:movieId" element={ < MovieDetails /> }/>
      </Routes>

    </div>
  );
}

export default App;
