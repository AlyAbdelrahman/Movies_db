
  export const initialState = {
    currentSearchTerm: '',
    searchResults: [],
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_SEARCH_RESULTS':
        return {
          ...state,
          currentSearchTerm: action.payload.term,
          searchResults: action.payload.results,
        };
      default:
        return state;
    }
  };

  export default moviesReducer;