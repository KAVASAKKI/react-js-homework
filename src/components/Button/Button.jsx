import styles from './Button.module.css';
import propTypes from 'prop-types';

export default function Button({ setPage }) {
  return (
    <button
      className={styles.container}
      type="button"
      id="loadMoreBtn"
      onClick={() => setPage(prevPage => prevPage + 1)}
    >
      Load more
    </button>
  );
}

Button.propTypes = {
  setPage: propTypes.func.isRequired,
};
