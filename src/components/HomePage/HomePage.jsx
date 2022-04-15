import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';
import {
  Container,
  Message,
  MoviesCards,
  PageHeading,
  Loader,
} from 'components';
import {
  Status,
  useStateMachineWithMessage,
} from 'hooks/useStateMachineWithMessage';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { status, setStatus, message, setMessage } =
    useStateMachineWithMessage();

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchTrendingMovies()
      .then(movies => {
        setTrendingMovies(movies);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setMessage(error);
        setStatus(Status.REJECTED);
      });
  }, [setMessage, setStatus]);

  return (
    <Container>
      <PageHeading children="Trending movies" />

      {status === Status.IDLE && null}

      {status === Status.PENDING && <Loader />}

      {status === Status.RESOLVED && <MoviesCards movies={trendingMovies} />}

      {status === Status.REJECTED && <Message children={message} />}
    </Container>
  );
}
