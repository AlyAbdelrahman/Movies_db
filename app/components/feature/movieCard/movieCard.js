import React from 'react';
import Link from 'next/link';

const MovieCard = ({ movieData }) => {
  if (movieData) {
    const { Title, Year, imdbID, Type, Poster } = movieData;
    return (
      <div className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        <Link href={`/movie/${imdbID}`}>
          <div className="block w-full h-72 relative overflow-hidden">
            <img
              src={Poster}
              alt={`${Title} Poster`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:blur-md"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="text-lg font-semibold mb-2">{Title}</h3>
              <p className="text-gray-900 mb-2">Year: {Year}</p>
              <p className="text-gray-900 mb-2">Type: {Type}</p>
              <p className="text-gray-900">IMDb ID: {imdbID}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default MovieCard;
