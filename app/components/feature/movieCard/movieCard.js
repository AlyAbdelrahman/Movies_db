import React from 'react'
import Link from 'next/link'
import './movieCard.css'
const MovieCard = ({ movieData }) => {
    if (movieData) {
      const { Title, Year, imdbID, Type, Poster } = movieData;
      return (
          <div className="movie-card">
          <Link href={`/movie/${imdbID}`}>
          <img src={Poster} alt={`${Title} Poster`} className="movie-poster" />
          <div className="movie-details">
            <h3>{Title}</h3>
            <p>Year: {Year}</p>
            <p>Type: {Type}</p>
            <p>IMDb ID: {imdbID}</p>
          </div>
          </Link>
        </div>
      );
    } else {
      return <div>Loading...</div>; 
    }
  };
  export default MovieCard;