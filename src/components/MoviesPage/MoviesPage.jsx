import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  SearchForm,
  MoviesCards,
  Loader,
  PageHeading,
  Message,
} from 'components';
import { fetchMovieByQuery } from 'services/moviesAPI';
import {
  Status,
  useStateMachineWithMessage,
} from 'hooks/useStateMachineWithMessage';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { status, setStatus, message, setMessage } =
    useStateMachineWithMessage();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const query = searchParams.get('query');

  const fetchData = () => {
    console.log('Выполняется fetchData()');
    fetchMovieByQuery(query, page)
      .then(data => {
        setTotalPages(data.total_pages);
        return data.results;
      })
      .then(newMovies => {
        if (newMovies.length) {
          setMovies(prevMovies => [...prevMovies, ...newMovies]);
          setStatus(Status.RESOLVED);
        } else {
          setMessage('Movies not found');
          setStatus(Status.REJECTED);
        }
      })
      .catch(message => {
        setMessage(message);
        setStatus(Status.REJECTED);
      });
  };

  useEffect(() => {
    if (query) {
      console.log('Изменился query');

      setMovies([]);
      setPage(1);
      fetchData();
    }
  }, [query]);

  useEffect(() => {
    // const query = searchParams.get('query');
    console.log('Изменился page');

    if (query) {
      setStatus(Status.PENDING);
      fetchData();
      return;
    }

    console.log('query === null');

    setPage(1);
    setMovies([]);
    setStatus(Status.IDLE);
  }, [page]);

  const onSubmit = query => {
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <Container>
      <PageHeading children="Search movies" />

      <SearchForm onSubmit={onSubmit} />

      {status === Status.IDLE && <Message children="Enter some bullshit" />}

      {status === Status.PENDING && <Loader />}

      {status === Status.RESOLVED && <MoviesCards movies={movies} />}

      {totalPages !== page && status === Status.RESOLVED && (
        <button onClick={() => setPage(page + 1)}>Load more</button>
      )}

      {status === Status.REJECTED && <Message children={message} />}
    </Container>
  );
}
