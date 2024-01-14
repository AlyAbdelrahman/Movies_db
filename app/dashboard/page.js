'use client'
import React, { useEffect, useReducer } from 'react';
import SearchResults from '../components/feature/searchResults/SearchResults';
import { useSelector } from 'react-redux';
import Banner from '../components/feature/banner/Banner';
import EmptyResults from '../components/feature/emptyResults/emptyResulst';

export default function HomePage() {
    const { searchResults, currentSearchTerm } = useSelector(state => state.movies);

    return (
        <div>
            {searchResults?.Search?.length > 0 ? <SearchResults searchResults={searchResults.Search} /> : (currentSearchTerm ? <EmptyResults /> : <Banner
                imageUrl='/assets/background.webp'
                movieTitle="doctor strange madness of multiverse"
                movieCategories={['Action', 'Adventure', 'Sci-Fi']}
            />)}

        </div>
    );
}
