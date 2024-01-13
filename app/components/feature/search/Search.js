'use client';
import React, { Fragment, useState } from 'react';
import { updateSearchResults } from '@/provider/reducers/movieReducer';
import { useDispatch } from 'react-redux';
import InputField from '../../common/InputField';
import { videoCategory } from '@/app/utils/constants';
import Chip from '../../common/Chip';

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [seasonNumber, setSeasonNumber] = useState('');
  const [episodeNumber, setEpisodeNumber] = useState('');

  const [searchError, setSearchError] = useState('');
  const [seasonError, setSeasonError] = useState('');
  const [episodeError, setEpisodeError] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('movie');

  const handleSearch = async () => {
    // Reset previous errors
    setSearchError('');
    setSeasonError('');
    setEpisodeError('');

    if (searchTerm.trim().length === 0) {
      setSearchError('Movie or Series name is required.');
      return;
    }

    // Validate search criteria
    if (episodeNumber.trim().length > 0 && seasonNumber.trim().length === 0) {
      setSeasonError('Season number is required for searching episodes.');
      return;
    }

    try {
      const apiEndpoint = `${process.env.NEXT_PUBLIC_BASE_ENV_API_URL}/movies/search`;

      const response = await fetch(`${apiEndpoint}?searchTerm=${encodeURIComponent(searchTerm)}&type=${selectedCategory}&season=${seasonNumber}&episode=${episodeNumber}`, { method: 'GET' });
      const searchData = await response.json();
      if (searchData.Response !== 'False' && searchData.Search.length > 0) {
        dispatch(updateSearchResults({ term: searchTerm, results: searchData || [], searchCategory: selectedCategory }));
      } else {
        dispatch(updateSearchResults({ term: searchTerm, results: [] || [], searchCategory: selectedCategory }));
        console.error('Data not found!');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleChipClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col items-center justify-center  md:h-48 pb-3 sm:h-screen-96 bg-gray-900 text-white rounded-t-sm md:relative">
      <div className="w-full px-4 sm:py-6 md:px-8 flex flex-col md:flex-row items-center">

        <InputField
          placeholder="Search for Movie or Series"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          errorMessage={searchError}
          className="mb-2 md:mb-2 md:mr-2 md:flex-grow"
        />
        {selectedCategory === 'series' && (
          <Fragment>
            <InputField
              placeholder="Season Number"
              value={seasonNumber}
              onChange={(e) => setSeasonNumber(e.target.value)}
              errorMessage={seasonError}
              className={`mb-2 md:mb-0 md:mr-2 ${seasonNumber ? 'block' : 'hidden'}`}
            />
            <InputField
              placeholder="Episode Number"
              value={episodeNumber}
              onChange={(e) => setEpisodeNumber(e.target.value)}
              errorMessage={episodeError}
              className={`mb-2 md:mb-0 md:mr-2 ${episodeNumber ? 'block' : 'hidden'}`}
            />
          </Fragment>
          
        )}
          <button
          onClick={handleSearch}
          className="bg-red-500 text-white border-none px-4 h-full rounded focus:outline-none transition-all duration-300 hover:bg-red-600"
        >
          <span className="hidden md:hidden xl:hidden sm:block p-2 w-44">Search</span>
          {/* Magnifier icon */}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6 hidden md:flex"
          >
            <path className='hidden md:flex' d="M21 21l-6-6m2-7a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"></path>
          </svg>
        </button>
      </div>
        <div className="flex my-2">
          {videoCategory.map((category) => (
            <Chip key={category} category={category} selectedCategory={selectedCategory} handleOnClick={() => handleChipClick(category)} />
          ))}
        </div>
      
    </div>
  );
};

export default Search;
