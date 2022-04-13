import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageHeading } from 'components';
import { fetchCast } from 'services/moviesAPI';
import styles from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      <PageHeading children="Cast" />

      <ul className={styles.list}>
        {cast &&
          cast.map(person => (
            <li key={person.id} className={styles.item}>
              <div className={styles.poster}>
                <img
                  className={styles.image}
                  src={
                    person.profile_path &&
                    `https://image.tmdb.org/t/p/w45${person.profile_path}`
                  }
                  alt=""
                />
              </div>

              <div className={styles.info}>
                <h3 className={styles.name}>{person.original_name}</h3>
                <p className={styles.character}>{person.character}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
