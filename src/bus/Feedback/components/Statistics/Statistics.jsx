import PropTypes from 'prop-types';
import { Notification } from '../../components';
import styles from './Statistics.module.css';

export default function Statistics({ estimates, total, positivePercentage }) {
  return (
    <>
      {total ? (
        <div className={styles.container}>
          <p className={styles.estimate}>
            Good:
            <span className={styles.value}>{estimates.good}</span>
          </p>
          <p className={styles.estimate}>
            Neutral:
            <span className={styles.value}>{estimates.neutral}</span>
          </p>
          <p className={styles.estimate}>
            Bad:
            <span className={styles.value}>{estimates.bad}</span>
          </p>
          <p className={styles.estimate}>
            Total:
            <span className={styles.value}>{total}</span>
          </p>
          <p className={styles.estimate}>
            Positive feedback:
            <span className={styles.value}>{positivePercentage}%</span>
          </p>
        </div>
      ) : (
        <Notification message="There is no leave feedback" />
      )}
    </>
  );
}

Statistics.propTypes = {
  estimates: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
