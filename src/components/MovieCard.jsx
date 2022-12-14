import React from 'react'
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

function MovieCard( { movie } ) {
  const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path

  return (
    <li className={styles.movieCard}>
      < Link to={'/movie/' + movie.id} >
        <img className={styles.movieImage} src={imageUrl} alt={imageUrl} />
        <div className={styles.movieTitle}>
          <p>{movie.title}</p>
          </div>
      </Link>
    </li>
  );
}

export default MovieCard
