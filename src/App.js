import './App.css';
import MovieDetails from './pages/MovieDetails';
import MoviesGrid from "./MoviesGrid";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Cinema</h1>

        <Link to="/">Home</Link>
        <Link to="/movies">Movie</Link>
      <Routes>


        <Route path="/" element={ < MoviesGrid /> }/>
        <Route path="/movies" element={ < MovieDetails /> }/>


      </Routes>

    </div>
  );
}

export default App;
