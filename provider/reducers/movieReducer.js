import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    currentSearchTerm: '',
    searchResults: [],
    searchCategory: 'movie'
  };

  const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      updateSearchResults: (state, action) => {
        state.currentSearchTerm = action.payload.term;
        state.searchCategory = action.payload.searchCategory;
        state.searchResults = action.payload.results;
      },
    },
  });

  export const { updateSearchResults } = moviesSlice.actions;
  export default moviesSlice;