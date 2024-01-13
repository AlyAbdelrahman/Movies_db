'use client'
import React, { useEffect, useReducer } from 'react';
import SearchResults from '../components/feature/searchResults/SearchResults';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const searchResults = useSelector(state => state.movies.searchResults);
  
    return (
        <div>
            {searchResults?.Search?.length > 0 ? <SearchResults searchResults={searchResults.Search} /> : 'No movies'}
        </div>
    );
}
