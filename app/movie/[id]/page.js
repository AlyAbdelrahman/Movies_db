import React from 'react';
import { getMovieDetails } from '@/app/services/services';

const MovieDetails = async ({params}) => {
    const { id } = params;
    console.log(params.id)
    const movieData = await getMovieDetails(id);
    const { Title, Plot, Released, imdbRating, Actors, Director, Writer, Poster } = movieData;

  if (movieData?.Title) {
    return (
        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          {Poster && (
            <img
              src={Poster}
              alt={Title}
              className="w-full h-auto rounded-md"
            />
          )}
        </div>
        <div className="md:w-2/3 p-4">
          <h2 className="text-3xl font-bold">{Title}</h2>
          <p>{Plot}</p>
          <p><strong>Released:</strong> {Released}</p>
          <p><strong>Rating:</strong> {imdbRating}</p>
          <p><strong>Cast:</strong> {Actors}</p>
          <p><strong>Crew:</strong> {Director}, {Writer}</p>
        </div>
      </div>
    );
  } else {
    // Handle loading state more gracefully, e.g., show a spinner
    return <div>Loading...</div>;
  }
};


export default MovieDetails;
