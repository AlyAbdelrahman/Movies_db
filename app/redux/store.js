import moviesReducer from './reducers/moviesReducer';
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
  moviesReducer,
composeWithDevTools()
)
export default store;