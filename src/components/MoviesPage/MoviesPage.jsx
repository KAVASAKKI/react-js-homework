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

  console.log('movies ', movies);

  return (
    <>
      <SearchForm submitQuery={setQuery} />

      {movies && <MoviesCards movies={movies} />}
    </>
  );
}
