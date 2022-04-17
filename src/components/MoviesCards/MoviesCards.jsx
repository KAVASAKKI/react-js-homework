import { Link } from 'react-router-dom';
import styles from './MoviesCards.module.css';

export default function MoviesCards({ movies }) {
  return (
    <ul className={styles.list}>
      {movies.map(movie => {
        const fixedPath = path =>
          path ? `https://image.tmdb.org/t/p/w185${path}` : '';

        return (
          <li key={movie.id} className={styles.card}>
            <Link to={`/movies/${movie.id}`} className={styles.link}>
              <img
                className={styles.poster}
                src={fixedPath(movie.poster_path)}
                alt=""
                height="275"
              />
              <h2 className={styles.subtitle}>{movie.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
