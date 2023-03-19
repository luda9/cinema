import React from 'react'
import MovieCard from "./MovieCard";
import styles from "../modules/MoviesGrid.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

function MoviesGrid() {
  const [ movies, setMovies ] = useState([]);

  const search = useLocation().search
  const params = new URLSearchParams(search)
  const query = params.get("search");

  useEffect(() => {
    const moviesResult = async () => {
      const searchUrl = query ? "search/movie?query=" + query  : "discover/movie"
      const url = 'https://api.themoviedb.org/3/' + searchUrl;
      const result = await axios.get(url, {
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTU0Nzc1MjMxMDEzNWU5OTgwNDkxMDQwODAwMzU5OCIsInN1YiI6IjYzNzNkMjJmOTBiODdlMDA3N2NiMjAxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHLEjrKCh9mOqtif91567__C1bHZn4lN09Tou0mfh78`,
          'Content-Type': 'application/json;charset=utf-8'
        }
      } )
      setMovies(result.data.results);
    }
    moviesResult();
  }, [query]);

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
