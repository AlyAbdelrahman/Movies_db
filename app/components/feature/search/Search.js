"use client";
import React from 'react';
import moviesSlice, { updateSearchResults } from '@/provider/reducers/movieReducer';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './search.css'

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/movies/search?searchTerm=${encodeURIComponent(searchTerm)}`,{method:'GET'});
      const data = await response.json();
      console.log(data)
    // const response = [
    //     {
    //       Title: "Super 8",
    //       Year: "2011",
    //       imdbID: "tt1650062",
    //       Type: "movie",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BMjIzNjEyMzcwOF5BMl5BanBnXkFtZTcwMTkyMjE0NQ@@._V1_SX300.jpg"
    //     },
    //     {
    //       Title: "The Super Mario Bros. Movie",
    //       Year: "2023",
    //       imdbID: "tt6718170",
    //       Type: "movie",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg"
    //     },
    //     {
    //       Title: "Super Size Me",
    //       Year: "2004",
    //       imdbID: "tt0390521",
    //       Type: "movie",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BMTYyOTk4MjIxOF5BMl5BanBnXkFtZTcwMzk1NTUyMQ@@._V1_SX300.jpg"
    //     },
    //     {
    //       Title: "Super Troopers",
    //       Year: "2001",
    //       imdbID: "tt0247745",
    //       Type: "movie",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BYzAyOTZjZDItZjNiYy00YTA3LWEyYWMtZTA0NmUzYjZhNjg0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    //     },
    //     {
    //       Title: "Super",
    //       Year: "2010",
    //       imdbID: "tt1512235",
    //       Type: "movie",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BMzIzMGFlMWYtYTM5Mi00OTg2LWE3YjAtYTVjODAzNTc4N2IxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    //     },
    //     {
    //       Title: "DC League of Super-Pets",
    //       Year: "2022",
    //       imdbID: "tt8912936",
    //       Type: "movie",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BZTIyNzc3NzMtNGE5YS00Yjg5LTk5MDMtOTUxMzk1ZTBkOTgwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    //     },
    //     {
    //       Title: "My Super Ex-Girlfriend",
    //       Year: "2006",
    //       imdbID: "tt0465624",
    //       Type: "movie",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BMWI1ZTdmNDItZjY1ZS00NmJiLTk2MzEtMzdhMDkyYmJjNGVlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
    //     },
    //     {
    //       Title: "Super Mario Bros.",
    //       Year: "1993",
    //       imdbID: "tt0108255",
    //       Type: "movie",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BZGVmZTUyZDAtYjg0MC00NmE5LWE2OTAtM2FjNGI1NWUyMzE0XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg"
    //     },
    //     {
    //       Title: "Super 30",
    //       Year: "2019",
    //       imdbID: "tt7485048",
    //       Type: "movie",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BMWQzM2Y0ZDQtYjA1MS00YmUzLWFiMGQtZTliZWM1MWRiNDZhXkEyXkFqcGdeQXVyNTE2MzU4OTA@._V1_SX300.jpg"
    //     },
    //     {
    //       Title: "Dragon Ball Super",
    //       Year: "2015–2018",
    //       imdbID: "tt4644488",
    //       Type: "series",
    //       Poster: "https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX300.jpg"
    //     }
    //   ];
      
      if (data.Search.length > 0){
    //   if (response && response.Response === 'True') {
        dispatch(updateSearchResults({ term: searchTerm, results: data || [] }));
      } else {
        console.error('Movie not found!');
        // Handle not found scenario 
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      // Handle error scenario 
    }
  };

  return (
    <div className="navbar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;
