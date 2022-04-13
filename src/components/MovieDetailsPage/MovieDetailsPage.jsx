import { Button } from 'components';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import { fetchMoviesById } from 'services/moviesAPI';
import styles from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const {
    production_countries: countries,
    spoken_languages: translations,
    poster_path: poster,
    release_date: date,
    vote_average,
    vote_count,
    overview,
    tagline,
    runtime,
    revenue,
    genres,
    budget,
    title,
    id,
  } = movieDetails;

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovieDetails);
  }, [movieId]);

  const posterURL = poster ? `https://image.tmdb.org/t/p/w342${poster}` : '';

  const getString = array => {
    if (array) {
      return array
        .map(element =>
          element.english_name ? element.english_name : element.name,
        )
        .join(', ');
    }
  };

  return (
    <div className={styles.container}>
      <Button onClick={() => navigate('/')}>Go back</Button>

      <div className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.tagline}>{tagline}</h2>

        <div className={styles.info}>
          <div className={styles.poster}>
            <img className={styles.image} src={posterURL} alt={title} />
          </div>

          <div className={styles.details}>
            <div className={styles.meta}>
              <h2 className={styles.name}>Raiting:</h2>
              <p className={styles.value}>
                <span style={{ color: 'black', fontWeight: 500 }}>
                  {vote_average}{' '}
                </span>
                <span>({vote_count})</span>
              </p>
            </div>

            <div className={styles.meta}>
              <h2 className={styles.name}>Tagline:</h2>
              <p className={styles.value}>{tagline}</p>
            </div>

            <div className={styles.meta}>
              <h2 className={styles.name}>Release date:</h2>
              <p className={styles.value}>{date}</p>
            </div>

            <div className={styles.meta}>
              <h2 className={styles.name}>Country:</h2>
              <p className={styles.value}>{getString(countries)}</p>
            </div>

            <div className={styles.meta}>
              <h2 className={styles.name}>Genres:</h2>
              <p className={styles.value}>{getString(genres)}</p>
            </div>

            <div className={styles.meta}>
              <h2 className={styles.name}>Translation:</h2>
              <p className={styles.value}>{getString(translations)}</p>
            </div>

            <div className={styles.meta}>
              <h2 className={styles.name}>Time:</h2>
              <p className={styles.value}>{runtime} min.</p>
            </div>

            <div className={styles.meta}>
              <h2 className={styles.name}>Budget:</h2>
              <p className={styles.value}>${budget}</p>
            </div>

            <div className={styles.meta}>
              <h2 className={styles.name}>Revenue:</h2>
              <p className={styles.value}>${revenue}</p>
            </div>
          </div>
        </div>

        <div className={styles.plot}>
          <h2 className={styles.plotSubtitle}>About movie «{title}»</h2>
          <p className={styles.plotText}>{overview}</p>
        </div>
      </div>

      <div className={styles.options}>
        <Button
          className={styles.optionBtn}
          onClick={() => navigate(`/movies/${id}/cast`)}
        >
          Cast
        </Button>
        <Button
          className={styles.optionBtn}
          onClick={() => navigate(`/movies/${id}/reviews`)}
        >
          Reviews
        </Button>
      </div>

      <Outlet />
    </div>
  );
}
