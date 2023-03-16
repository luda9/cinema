import React from 'react'
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MovieDetails.module.css";
import Spinner from '../components/Spinner';

function MovieDetails() {

  const { movieId } = useParams();

  const [ movie, setMovie ] = useState({});

  const [cargando, setCargando] = useState(false)

  const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}`;

  useEffect(() => {
    setCargando(true)

    const fetchMovieDetails = async () => {

      const result = await axios.get(movieUrl, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTU0Nzc1MjMxMDEzNWU5OTgwNDkxMDQwODAwMzU5OCIsInN1YiI6IjYzNzNkMjJmOTBiODdlMDA3N2NiMjAxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHLEjrKCh9mOqtif91567__C1bHZn4lN09Tou0mfh78',
          'Content-Type': 'application/json;charset=utf-8'
        }
      } )
      setMovie(result.data);
      setCargando(false)
    }
    fetchMovieDetails();

  }, []);

  const imageUrl = 'https://image.tmdb.org/t/p/w300'

  const stars = Math.round(movie.vote_average / 2)

  let starsResult = [];

  for (let i = 0; i < stars; i++) {starsResult.push('⭐️')}

  return (
    <div className={styles.container}>
      <div className={styles.movieDescription}>
      {cargando ? <Spinner /> :
          <>
            <img className={styles.poster} src={imageUrl + movie.poster_path} alt={movie.title} />
            <div className={styles.description}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <div className={styles.starsContainer}>
                {starsResult.map((star) => (<p className={styles.star}>{star}</p>))}
              </div>
            </div>
          </>
          }
      </div>
    </div>
  )
}

export default MovieDetails
