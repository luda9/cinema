import React from 'react'
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";



function MovieDetails() {

  const { movieId } = useParams();

  const [ movie, setMovie ] = useState({});

  const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}`;

  useEffect(() => {

    const fetchMovieDetails = async () => {

      const result = await axios.get(movieUrl, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTU0Nzc1MjMxMDEzNWU5OTgwNDkxMDQwODAwMzU5OCIsInN1YiI6IjYzNzNkMjJmOTBiODdlMDA3N2NiMjAxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHLEjrKCh9mOqtif91567__C1bHZn4lN09Tou0mfh78',
          'Content-Type': 'application/json;charset=utf-8'
        }
      } )
      setMovie(result);
    }
    fetchMovieDetails();
  }, [movieId]);

  console.log(movie.data.title)

  // const { data: { title } } = movie;


  // const imageUrl = 'https://image.tmdb.org/t/p/w300'


  return (
    <div>
    </div>
  )
}

export default MovieDetails
