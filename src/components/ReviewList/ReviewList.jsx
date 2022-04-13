import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageHeading } from 'components/PageHeading';
import Review from './Review';
import { fetchReviews } from 'services/moviesAPI';
import styles from './ReviewList.module.css';

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  console.log(reviews);

  return (
    <div className={styles.container}>
      <PageHeading children="Reviews" />

      {reviews.length ? (
        <ul className={styles.list}>
          <Review reviews={reviews} />
        </ul>
      ) : (
        <h3 className={styles.error}>Reviews not found</h3>
      )}
    </div>
  );
}
