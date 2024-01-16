import 'dotenv/config'
const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;


export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };
export const searchMovieByTitle = async (title) => {
  const encodedTitle = encodeURIComponent(title);
  const url = `${apiUrl}?apikey=${apiKey}&s=${encodedTitle}`;
  const data = await fetchData(url);

  if (data && data.Response === 'True') {
    return data;
  } else {
    console.error('Movie not found!');
  }
};


export const getMovieDetails = async (imdbID) => {
    
    const response = await fetch(`${apiUrl}/movieDetails/${encodeURIComponent(imdbID)}`,{method:'GET'});
    
      if (!response.ok) {
        throw new Error('something went wrong')
    } 
    return response.json();
    };
