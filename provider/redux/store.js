import {configureStore} from '@reduxjs/toolkit';
import moviesSlice from '../reducers/movieReducer';

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
    }
})