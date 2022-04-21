import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Container, Button, Loader, Message } from 'components';
import { MovieDetailsMarkup } from './MovieDetailsMarkup';
import { fetchMoviesById } from 'services/moviesAPI';
import {
  Status,
  useStateMachineWithMessage,
} from 'hooks/useStateMachineWithMessage';
import { useSlug } from 'hooks/useSlug';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { status, setStatus, message, setMessage } =
    useStateMachineWithMessage();

  const navigate = useNavigate();
  const location = useLocation();
  const { slug, movieId } = useSlug();

  console.log(location);

  useEffect(() => {
    setStatus(Status.PENDING);

    fetchMoviesById(movieId)
      .then(details => {
        if (details) {
          setMovieDetails(details);
          setStatus(Status.RESOLVED);
          return;
        }
        setMessage('Movies not found');
        setStatus(Status.REJECTED);
      })
      .catch(message => {
        setMessage(message);
        setStatus(Status.REJECTED);
      });
  }, [movieId, setMessage, setStatus]);

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  const onNavigate = where => {
    navigate(`/movies/${slug}/${where}`, { state: location.state });
  };

  return (
    <Container>
      <Button onClick={onGoBack}>Go back</Button>

      {status === Status.IDLE && null}

      {status === Status.PENDING && <Loader />}

      {status === Status.RESOLVED && (
        <MovieDetailsMarkup movieDetails={movieDetails} />
      )}

      {status === Status.REJECTED && <Message children={message} />}

      <div style={{ textAlign: 'center', paddingBottom: '15px' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => onNavigate('cast')}
        >
          Cast
        </Button>
        <Button onClick={() => onNavigate('reviews')}>Reviews</Button>
      </div>

      <Outlet />
    </Container>
  );
};
