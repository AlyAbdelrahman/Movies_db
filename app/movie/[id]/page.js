import React from 'react';
import { getMovieDetails } from '@/app/services/services';
import MovieCard from '@/app/components/feature/movieCard/movieCard';

const MovieDetails = async ({params}) => {
    const { id } = params;
    console.log(params.id)
    const movieData = await getMovieDetails(id);
    console.log(movieData)

  if (movieData?.Title) {
    return (
     <MovieCard movieData={movieData}/>
    );
  } else {
    // Handle loading state more gracefully, e.g., show a spinner
    return <div>Loading...</div>;
  }
};


export default MovieDetails;
