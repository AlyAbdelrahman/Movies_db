
const apiKey = process.env.OMDB_API_KEY;
const apiUrl = process.env.BASE_API_URL;


const searchMovieByTitle = async (title) => {
  const encodedTitle = encodeURIComponent(title);
  const url = `${apiUrl}?apikey=${apiKey}&t=${encodedTitle}`;
  const data = await fetchData(url);

  if (data && data.Response === 'True') {
    console.log('Movie Title:', data.Title);
    console.log('Year:', data.Year);
    console.log('Genre:', data.Genre);
    // Add more properties as needed
  } else {
    console.error('Movie not found!');
  }
};

const getAllMovies = async () => {
  const url = `${apiUrl}?apikey=${apiKey}&s=`;
  const data = await fetchData(url);

  if (data && data.Response === 'True') {
    data.Search.forEach((movie) => {
      console.log('Movie Title:', movie.Title);
      console.log('Year:', movie.Year);
      console.log('IMDb ID:', movie.imdbID);
      console.log('Poster:', movie.Poster);
      console.log('---');
    });
  } else {
    console.error('No movies found!');
  }
};

const getMovieDetails = async (imdbID) => {
  const url = `${apiUrl}?apikey=${apiKey}&i=${imdbID}`;
  const data = await fetchData(url);

  if (data && data.Response === 'True') {
    console.log('Movie Title:', data.Title);
    console.log('Year:', data.Year);
    console.log('Genre:', data.Genre);
    // Add more properties as needed
  } else {
    console.error('Movie details not found!');
  }
};

// Example usage
searchMovie('The Shawshank Redemption');
console.log('---');
getAllMovies();
console.log('---');
getMovieDetails('tt0111161');
