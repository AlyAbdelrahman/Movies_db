'use client'
import React, { useEffect, useReducer } from 'react';
import SearchResults from '../components/feature/searchResults/SearchResults';
import { useSelector } from 'react-redux';
import Banner from '../components/feature/banner/Banner';
import EmptyResults from '../components/feature/emptyResults/EmptyResulst';
import Spinner from '../components/shared/spinner';

export default function HomePage() {
    const { searchResults, currentSearchTerm, isLoading } = useSelector(state => state.movies);

    return (
        <div>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    (searchResults && searchResults.Search && searchResults.Search.length > 0 ? (
                        <SearchResults searchResults={searchResults.Search} />
                    ) : (
                        currentSearchTerm && !isLoading && <EmptyResults />
                    ))
                )
            }
        </div>
    );
}
