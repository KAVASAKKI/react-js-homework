import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesCards.module.css';
import slugify from 'slugify';

export const MoviesCards = ({ movies }) => {
  const location = useLocation();

  const makeSlug = str => {
    return slugify(str, { lower: true, remove: /[*+~.()'"!:@]/g });
  };

  return (
    <ul className={styles.list}>
      {movies.map(movie => {
        const fixedPath = path =>
          path ? `https://image.tmdb.org/t/p/w185${path}` : '';

        return (
          <li key={movie.id} className={styles.card}>
            <Link
              to={`/movies/${makeSlug(`${movie.title} ${movie.id}`)}`}
              state={{ from: location }}
              className={styles.link}
            >
              <img
                className={styles.poster}
                src={fixedPath(movie.poster_path)}
                alt={movie.title}
                height="275"
              />
              <h2 className={styles.subtitle}>{movie.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
