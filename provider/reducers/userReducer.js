import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    userData: {},
    userWatchlist: []
  };

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      updateUserData: (state, action) => {
        state.userData = action.payload.user;
        state.userWatchlist = action.payload.userWatchlist;
      },
      updateUserWatchlistData: (state, action) => {
        state.userWatchlist = action.payload.userWatchlist;
      },
    },
  });

  export const { updateUserData, updateUserWatchlistData } = userSlice.actions;
  export default userSlice;