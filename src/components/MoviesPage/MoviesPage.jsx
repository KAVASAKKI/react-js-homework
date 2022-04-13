import { useState, useEffect } from 'react';
import { SearchForm, MoviesCards } from 'components';
import { fetchMovieByQuery } from 'services/moviesAPI';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      fetchMovieByQuery(query).then(setMovies);
    }
  }, [query]);

  return (
    <>
      <SearchForm getQuery={setQuery} />

      {movies.length && <MoviesCards movies={movies} />}
    </>
  );
}
