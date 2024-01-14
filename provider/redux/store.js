import {configureStore} from '@reduxjs/toolkit';
import moviesSlice from '../reducers/movieReducer';
import userSlice from '../reducers/userReducer';

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        user: userSlice.reducer
    }
})