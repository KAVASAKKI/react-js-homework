import { NavLink } from 'react-router-dom';
import styles from './MoviesCards.module.css';

export default function MoviesCards({ movies }) {
  return (
    <ul className={styles.list}>
      {movies.map(movie => {
        const posterURL = movie.poster_path
          ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
          : '';

        return (
          <li key={movie.id} className={styles.card}>
            <NavLink to={`./movies/${movie.id}`} className={styles.link}>
              <img className={styles.poster} src={posterURL} alt="" />
              <h2 className={styles.subtitle}>{movie.title}</h2>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
