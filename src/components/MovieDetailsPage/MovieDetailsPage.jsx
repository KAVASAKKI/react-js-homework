import { useState, useEffect } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import { Container, Button, Loader, Message } from 'components';
import MovieDetailsMarkup from './MovieDetailsMarkup';
import { fetchMoviesById } from 'services/moviesAPI';
import {
  Status,
  useStateMachineWithMessage,
} from 'hooks/useStateMachineWithMessage';

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { status, setStatus, message, setMessage } =
    useStateMachineWithMessage();

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

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>Go back</Button>

      {status === Status.IDLE && null}

      {status === Status.PENDING && <Loader />}

      {status === Status.RESOLVED && (
        <MovieDetailsMarkup movieDetails={movieDetails} />
      )}

      {status === Status.REJECTED && <Message children={message} />}

      <div style={{ textAlign: 'center', paddingBottom: '15px' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => navigate(`/movies/${movieDetails.id}/cast`)}
        >
          Cast
        </Button>
        <Button onClick={() => navigate(`/movies/${movieDetails.id}/reviews`)}>
          Reviews
        </Button>
      </div>

      <Outlet />
    </Container>
  );
}
