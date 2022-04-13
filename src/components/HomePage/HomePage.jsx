import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { MoviesCards } from 'components';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <>
      <h1 className="gagaga">Trending Movies</h1>

      <MoviesCards movies={trendingMovies} />
    </>
  );
}
