import { useEffect, useState } from 'react';
import { Title, Loader, Message } from 'components';
import { fetchCast } from 'services/moviesAPI';
import {
  Status,
  useStateMachineWithMessage,
} from 'hooks/useStateMachineWithMessage';
import { useSlug } from 'hooks/useSlug';
import styles from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { status, setStatus, message, setMessage } =
    useStateMachineWithMessage();

  const { movieId } = useSlug();

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchCast(movieId)
      .then(actors => {
        if (actors) {
          setCast(actors);
          setStatus(Status.RESOLVED);
          return;
        }

        setMessage('Cast not found');
        setStatus(Status.REJECTED);
      })
      .catch(error => {
        setMessage(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId, setMessage, setStatus]);

  return (
    <>
      <Title children="Cast" />

      {status === Status.IDLE && null}

      {status === Status.PENDING && <Loader />}

      {status === Status.REJECTED && <Message children={message} />}

      {status === Status.RESOLVED && (
        <ul className={styles.list}>
          {cast.map(person => (
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
      )}
    </>
  );
};
