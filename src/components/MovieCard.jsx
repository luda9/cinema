import React from 'react'
import styles from "../modules/MovieCard.module.css";
import { Link } from "react-router-dom";

function MovieCard( { movie } ) {
  const placeHolder= "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
  const imageUrl = movie.poster_path ? 'https://image.tmdb.org/t/p/w300' + movie.poster_path : placeHolder;

  return (
    <li className={styles.movieCard}>
      < Link to={'/cinema/movie/' + movie.id} >
      <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
        <div className={styles.movieTitle}>
          <p>{movie.title}</p>
          </div>
      </Link>
    </li>
  );
}

export default MovieCard
