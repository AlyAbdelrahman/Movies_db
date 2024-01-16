import React from 'react';
import { getMovieDetails } from '@/app/services/services';
import AddToWatchList from '@/app/components/feature/addTowatchList/AddToWatchList';
import EmptyResults from '@/app/components/feature/emptyResults/EmptyResulst';

const MovieDetails = async ({params}) => {
    const { id } = params;
    let movieData;
    try {
         movieData = await getMovieDetails(id);
        console.log('Movie details:', movieData);
    } catch (error) {
        console.error('Error fetching movie details:', error.message);
    
    return <EmptyResults/>
    }
    
    if (movieData?.Title) {
      const { Title, Plot, Released, imdbRating, Actors, Director, Writer, Poster } = movieData;
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
          <AddToWatchList movieData={movieData}/>
        </div>
      </div>
    );
  }
};


export default MovieDetails;
