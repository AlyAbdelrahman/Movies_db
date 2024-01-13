import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../movieCard/movieCard';


const SearchResults = ({searchResults}) => {
  return (
    <div>
      {/* Render your search results here */}
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <MovieCard movieData={result} key={result.imdbID}/>
            {/* <strong>{result.Title}</strong> - {result.Year} */}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SearchResults;
