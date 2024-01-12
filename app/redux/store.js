import { createStore } from 'redux';
import moviesReducer from './reducers/moviesReducer';

// Create Store
const store = createStore(moviesReducer);

export default store;