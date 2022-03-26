import ContentLoader from 'react-content-loader';
import styles from './Loader.module.css';

const Loader = () => {
  const cards = [];
  for (let i = 1; i <= 12; i++) {
    cards.push(<rect className={styles.rect} />);
  }

  return (
    <div className={styles.list}>
      {cards.map((card, index) => (
        <ContentLoader
          key={index}
          className={styles.item}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          {card}
        </ContentLoader>
      ))}
    </div>
  );
};

Loader.propTypes = {};

export default Loader;
