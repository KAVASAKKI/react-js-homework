import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd505c40aadb42cb8d20d7809ace7e2f1';

async function fetchMovies(url) {
  try {
    return await axios(url);
  } catch (error) {
    return Promise.reject(new Error(`GAGAGA!!! ${error.message}`));
  }
}

export const fetchTrendingMovies = () => {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  return fetchMovies(url).then(response => response.data.results);
};

export const fetchMoviesById = movieId => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  return fetchMovies(url).then(response => response.data);
};

export const fetchCast = movieId => {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  return fetchMovies(url).then(response => response.data.cast);
};

export const fetchReviews = movieId => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
  return fetchMovies(url).then(response => response.data.results);
};

export const fetchMovieByQuery = query => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const r = fetchMovies(url).then(response => response.data.results);
  console.log(r);
  return r;
};
