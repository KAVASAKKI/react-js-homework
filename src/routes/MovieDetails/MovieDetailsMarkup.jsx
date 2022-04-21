import styles from './MovieDetailsMarkup.module.css';

export const MovieDetailsMarkup = ({ movieDetails }) => {
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
  } = movieDetails;

  const posterURL = poster ? `https://image.tmdb.org/t/p/w342${poster}` : '';

  const setString = array => {
    if (array) {
      return array
        .map(element =>
          element.english_name ? element.english_name : element.name,
        )
        .join(', ');
    }
  };

  return (
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
            <p className={styles.value}>{setString(countries)}</p>
          </div>

          <div className={styles.meta}>
            <h2 className={styles.name}>Genres:</h2>
            <p className={styles.value}>{setString(genres)}</p>
          </div>

          <div className={styles.meta}>
            <h2 className={styles.name}>Translation:</h2>
            <p className={styles.value}>{setString(translations)}</p>
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
  );
};
