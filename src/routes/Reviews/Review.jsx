import styles from './Review.module.css';

export const Review = ({ reviews }) => {
  const fixPath = path => {
    if (!path) return;
    if (path.includes('https')) {
      return path.slice(1, path.length);
    } else {
      return `https://www.gravatar.com/avatar${path}`;
    }
  };

  if (reviews) {
    return reviews.map(review => {
      const {
        id,
        url,
        content,
        author_details: { avatar_path, username = 'Guest' },
      } = review;

      return (
        <li key={id} className={styles.item}>
          <img src={fixPath(avatar_path)} className={styles.avatar} alt="" />

          <div className={styles.info}>
            <h3 className={styles.username}>{username}</h3>
            <p className={styles.message}>{content.slice(0, 60)}...</p>
          </div>

          <a
            className={styles.link}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            read more
          </a>
        </li>
      );
    });
  }
};
