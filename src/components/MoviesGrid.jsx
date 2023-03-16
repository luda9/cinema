import React from 'react'
import MovieCard from "./MovieCard";
import styles from "../modules/MoviesGrid.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function MoviesGrid() {

  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    const moviesResult = async () => {
      const url = 'https://api.themoviedb.org/3/discover/movie';

      const result = await axios.get(url, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTU0Nzc1MjMxMDEzNWU5OTgwNDkxMDQwODAwMzU5OCIsInN1YiI6IjYzNzNkMjJmOTBiODdlMDA3N2NiMjAxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHLEjrKCh9mOqtif91567__C1bHZn4lN09Tou0mfh78',
          'Content-Type': 'application/json;charset=utf-8'
        }
      } )
      setMovies(result.data.results);
    }
    moviesResult();
  }, []);

  return (
    <div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default MoviesGrid
