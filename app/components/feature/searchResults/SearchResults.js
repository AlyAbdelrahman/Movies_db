import React from 'react';
import { useSelector } from 'react-redux';


const SearchResults = ({searchResults}) => {
  return (
    <div>
      {/* Render your search results here */}
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <strong>{result.Title}</strong> - {result.Year}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SearchResults;
