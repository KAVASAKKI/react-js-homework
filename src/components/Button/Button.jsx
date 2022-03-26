import styles from './Button.module.css';
import propTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <button
      onClick={loadMore}
      type="button"
      id="loadMoreBtn"
      className={styles.container}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: propTypes.func.isRequired,
};

export default Button;
