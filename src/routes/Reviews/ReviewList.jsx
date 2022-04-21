import { useEffect, useState } from 'react';
import { Review } from './Review';
import { Title, Message, Loader } from 'components';
import { fetchReviews } from 'services/moviesAPI';
import {
  Status,
  useStateMachineWithMessage,
} from 'hooks/useStateMachineWithMessage';
import { useSlug } from 'hooks/useSlug';
import styles from './ReviewList.module.css';

export const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const { status, setStatus, message, setMessage } =
    useStateMachineWithMessage();
  const { movieId } = useSlug();

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchReviews(movieId)
      .then(reviewArr => {
        if (reviewArr) {
          setReviews(reviewArr);
          setStatus(Status.RESOLVED);
          return;
        }
        setMessage('Reviews not found');
        setStatus(Status.REJECTED);
      })
      .catch(error => {
        setMessage(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId, setMessage, setStatus]);

  return (
    <div className={styles.container}>
      <Title children="Reviews" />

      {status === Status.IDLE && null}

      {status === Status.PENDING && <Loader />}

      {status === Status.RESOLVED && (
        <ul className={styles.list}>
          <Review reviews={reviews} />
        </ul>
      )}

      {status === Status.REJECTED && <Message children={message} />}
    </div>
  );
};
