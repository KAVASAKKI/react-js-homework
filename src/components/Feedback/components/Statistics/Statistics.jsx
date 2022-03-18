import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <div className={styles.container}>
        <p className={styles.estimate}>
          Good:
          <span className={styles.value}>{good}</span>
        </p>
        <p className={styles.estimate}>
          Neutral:
          <span className={styles.value}>{neutral}</span>
        </p>
        <p className={styles.estimate}>
          Bad:
          <span className={styles.value}>{bad}</span>
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

export default Statistics;
