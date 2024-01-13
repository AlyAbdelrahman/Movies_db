import React from 'react';
import MovieCard from '../movieCard/MovieCard';


const SearchResults = ({searchResults}) => {
  console.log('>>searchResults',searchResults)
  return (
    <div className="grid p-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {searchResults.map((result, index) => (
        <div key={index}>
          <MovieCard movieData={result} key={result.imdbID} />
        </div>
      ))}
    </div>
  );
};


export default SearchResults;
